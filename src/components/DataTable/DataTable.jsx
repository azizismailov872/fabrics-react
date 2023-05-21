import { Box} from '@mui/material'
import { DataGrid} from '@mui/x-data-grid'
import useAppStore from '../../store/store'
import Pagination from '../Pagination/Pagination'

const DataTable = ({ data, columns,boxClass,gridStyles,visibleColumns, ...props }) => {

    const mode = useAppStore(state => state.mode)

    const defaultGridStyles = {
        "& .MuiDataGrid-root": {
            border: 'none',
            marginBottom: '0px'
        },
        "& .MuiDataGrid-cell": {
            borderBottom: 'none !important',
        },
        '& .quantity-column': {
            color: mode === 'light' ? 'green' : '#95A4FC'
        },
        "& .MuiDataGrid-columnHeaders": {
            //backgroundColor: mode === 'light' ? '#F7F9FB' : 'rgba(0, 0, 0, 0.4)',
            backgroundColor: 'transparent',
            color: mode === 'light' ? '#1c1c1c' : '#F7F9FB',
        },
        "& .MuiDataGrid-virtualScroller": {
            //backgroundColor: mode === 'light' ? '#E5ECF6' : '#404052',
            backgroundColor: 'transparent',
            color: mode === 'light' ? '#1c1c1c' : '#F7F9FB',
            paddingLeft: '2px',
            paddingRight: '2px',
        },
        "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
            display: 'none',
            scrollbarWidth: 'none'
        },
        "& .MuiDataGrid-footerContainer": {
            borderTop: '1px solid #ccc',
            marginBottom: '0px',
            height: '2px !important',
            //backgroundColor: mode === 'light' ? '#F7F9FB' : 'rgba(0, 0, 0, 0.4)',
            backgroundColor: 'transparent',

        },
        '& .MuiTablePagination-root': {
            color: mode === 'light' ? '#1c1c1c' : '#fff !important',
        },
        '& .MuiTablePagination-root .Mui-disabled': {
            color: mode === 'light' ? 'rgba(0, 0, 0, 0.2)' : '#333',
        },
        '& .MuiCheckbox-root': {
            color: mode === 'light' ? '#1c1c1c' : '#fff !important',
        },
        "& .MuiDataGrid-row": {
            borderBottom: '0.1px solid #ccc',
            '&:hover': {
                borderBottom: 'none',
                borderRadius: '10px',
                backgroundColor: mode === 'light' ? 'rgba(229, 236, 246, 0.5) !important' : 'rgba(0, 0, 0, 0.2) !important'
            },
        },
    }

    const styles = gridStyles ? gridStyles : defaultGridStyles


    return (
        data?.length && data.length > 0 ?
                <Box className={`w-full ${boxClass}`} sx={styles}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        columnVisibilityModel={visibleColumns}
                        slots={{
                            pagination: Pagination
                        }}
                        hideFooterSelectedRowCount={true}
                        disableRowSelectionOnClick
                        {...props}
                    />
                </Box>
            : 
            <div className='mt-2 h-[40vh] flex items-center justify-center shadow-lg rounded-md'>
                <h2 className='text-2xl text-black-100 dark:text-primary-light font-medium'>Нет данных</h2>
            </div>
    )
}

export default DataTable