import { Modal } from '@mui/material'
import Panel from '../../../components/Panel/Panel'
import DataTable from '../../../components/DataTable/DataTable'

import FilterForm from '../../../components/Forms/Filter/Fabrics/FilterForm'
import SortingForm from '../../../components/Forms/Sorting/SortingForm'
import VisibilityForm from '../../../components/Forms/Visibility/VisibilityForm'
import TableLoader from '../../../components/Loaders/Table/TableLoader'

const FabricsList = ({ isFilterVisible, setFilterVisible, showResetSort, resetSort, handleSort, showDeleteBtn, deleteRowsCount, onDelete, modal, openModal, closeModal,register, onSubmit, reset, watch, errors, data, visibleColumns, setSelectedRows, dataTableColumns, visibilityFormFields, hanldeVisibiltySubmit, sortByOptions, sortOptions, sortModel, defaultSortingModel, isLoading,
materials,colors,control
}) => (
    <div className='pb-8 pt-2'>
        <Panel
            isFilterVisible={isFilterVisible}
            setFilterVisible={setFilterVisible}
            showResetSort={showResetSort}
            resetSort={resetSort}
            showDeleteBtn={showDeleteBtn}
            deleteRowsCount={deleteRowsCount}
            onDelete={onDelete}
            modal={modal}
            openModal={openModal}
        />
        <FilterForm
            isVisible={isFilterVisible}
            register={register}
            onSubmit={onSubmit}
            reset={reset}
            watch={watch}
            errors={errors}
            materials={materials}
            colors={colors}
            control={control}
        />
        <div>
            {
                isLoading ? <TableLoader /> : (
                    <DataTable
                        data={data?.data?.data ? data.data.data : []}
                        rowCount={data?.data?.total ? data.data.total : 0}
                        visibleColumns={visibleColumns}
                        checkboxSelection={true}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 30
                                }
                            }
                        }}
                        onRowSelectionModelChange={(newRowSelectionModel) => {
                            setSelectedRows(newRowSelectionModel);
                        }}
                        columns={dataTableColumns}
                        boxClass={
                            (data?.data?.total && data.data.total > 10) ? 'h-[95vh]' : 'h-[65vh]'
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

export default FabricsList