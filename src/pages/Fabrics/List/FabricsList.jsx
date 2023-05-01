import { useState } from 'react'
import useFilter from '../../../hooks/useFilter'
import { useQuery } from '@tanstack/react-query'
import { FabricsService } from '../../../services/FabricsService'
import Panel from '../../../components/Panel/Panel'
import FilterForm from '../../../components/FilterForm/FilterForm'
import DataTable from '../../../components/DataTable/DataTable'
import { dataTableColumns, filterFields, visibilityFormFields,defaultVisibleColumns,defaultSortingModel,sortByOptions,sortOptions } from '../data'
import { isEmpty } from 'lodash'
import useModal from '../../../hooks/useModal'
import { Modal } from '@mui/material'
import useColumnsVisibility from '../../../hooks/useColumnsVisibility'
import VisibilityForm from '../../../components/VisibilityForm/VisibilityForm'
import TableLoader from '../../../components/TableLoader/TableLoader'
import useSorting from '../../../hooks/useSorting'
import SortingForm from '../../../components/SortingForm/SortingForm'

const getFilterVisibleValue = (searchParams) => {
    const params = Object.fromEntries(searchParams);
    const { page, ...filterParams } = params
    return !isEmpty(filterParams) ? true : false
}


const FabricsList = () => {

    const { register, onSubmit, reset, watch, searchParams } = useFilter()

    const [isFilterVisible, setFilterVisible] = useState(getFilterVisibleValue(searchParams))

    const [modal, openModal, closeModal] = useModal();

    const [visibleColumns, hanldeVisibiltySubmit] = useColumnsVisibility(defaultVisibleColumns, 'fabricsVisibleColumns', closeModal)

    const [sortModel, handleSort, resetSort] = useSorting(defaultSortingModel, 'fabricsSorting', closeModal)

    const { data, isLoading } = useQuery({
        queryKey: ['fabrics', searchParams.toString(),JSON.stringify(sortModel)],
        queryFn: () => FabricsService.getFabricsList(searchParams.toString(),sortModel),
    })

    const showResetSort = (sortModel,defaultSortModel) => {
        return JSON.stringify(sortModel) !== JSON.stringify(defaultSortModel) ? true : false
    }


    return (
        <div className='pb-8 pt-2'>
            <Panel modal={modal} openModal={openModal} setFilterVisible={setFilterVisible} isFilterVisible={isFilterVisible} showResetSort={showResetSort(sortModel,defaultSortingModel)} resetSort={resetSort} />
            <FilterForm
                fields={filterFields}
                isVisible={isFilterVisible}
                register={register}
                onSubmit={onSubmit}
                reset={reset}
                watch={watch}
            />
            <div>
                {
                    isLoading ? <TableLoader /> : (
                        <DataTable
                            data={data.data.data.data}
                            rowCount={data.data.data.total}
                            visibleColumns={visibleColumns}
                            checkboxSelection={true}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 30
                                    }
                                }
                            }}
                            columns={dataTableColumns}
                            boxClass={
                                data.data.data.total > 10 ? 'h-[110vh]' : 'h-[50vh]'
                            }
                        />
                    )
                }

            </div>
            <Modal
                open={modal.isOpen}
                onClose={closeModal}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {
                    modal.modal === 'visibility' ?
                        <VisibilityForm
                            fields={visibilityFormFields}
                            defaultValues={visibleColumns}
                            onSubmitFn={hanldeVisibiltySubmit}
                        /> : modal.modal === 'sorting' ? (
                            <SortingForm 
                                sortByOptions={sortByOptions}
                                sortOptions={sortOptions}
                                defaultValue={sortModel}
                                onSubmitFn={handleSort}
                                resetSort={resetSort}
                                defaultSortingModel={defaultSortingModel}
                            />
                        ) : <div>No modal</div>
                }
            </Modal>
        </div>
    )
}

export default FabricsList