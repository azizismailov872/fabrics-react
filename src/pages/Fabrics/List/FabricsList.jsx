import { useState } from 'react'
import useFilter from '../../../hooks/useFilter'
import { useQuery } from '@tanstack/react-query'
import { FabricsService } from '../../../services/FabricsService'
import Panel from '../../../components/Panel/Panel'
import FilterForm from '../../../components/FilterForm/FilterForm'
import DataTable from '../../../components/DataTable/DataTable'
import { dataTableColumns, filterFields, visibilityFormFields } from '../data'
import { isEmpty } from 'lodash'
import useModal from '../../../hooks/useModal'
import { Modal } from '@mui/material'
import useColumnsVisibility from '../../../hooks/useColumnsVisibility'
import { defaultVisibleColumns } from '../data'
import VisibilityForm from '../../../components/VisibilityForm/VisibilityForm'

const getFilterVisibleValue = (searchParams) => {
    const params = Object.fromEntries(searchParams);
    const {page, ...filterParams} = params
    return !isEmpty(filterParams) ? true : false
}


const FabricsList = () => {

    const {register,onSubmit,reset,watch,searchParams} = useFilter()    

    const [isFilterVisible,setFilterVisible] = useState(getFilterVisibleValue(searchParams))
    
    const [modal, openModal, closeModal] = useModal();

    const [visibleColumns,hanldeVisibiltySubmit] = useColumnsVisibility(defaultVisibleColumns,'fabricsVisibleColumns',closeModal)

    const {data,isLoading} = useQuery({
        queryKey: ['fabrics',searchParams.toString()],
        queryFn: () => FabricsService.getFabricsList(searchParams.toString()),
    })

    if(isLoading) {
        return <div>Loading...</div>
    }


    return (
        <div className='pb-8 pt-2'>
            <Panel modal={modal} openModal={openModal} setFilterVisible={setFilterVisible} isFilterVisible={isFilterVisible} />
            <FilterForm 
                fields={filterFields} 
                isVisible={isFilterVisible} 
                register={register} 
                onSubmit={onSubmit}
                reset={reset}
                watch={watch}
            />
            <div>
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
                    /> : modal.modal === 'sorting' ? <div>Sorting</div> : <div>No modal</div>
                }
            </Modal>
        </div>
    )
}

export default FabricsList