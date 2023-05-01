import {Pagination as MuiPagination} from '@mui/material'
import { gridRowCountSelector, gridPaginationModelSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid'
import useAppStore from '../../store/store';
import usePagination from '../../hooks/usePagination';



const Pagination = () => {
    const apiRef = useGridApiContext();
    const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
    const [page, changePage] = usePagination()
    const rowCount = useGridSelector(apiRef, gridRowCountSelector)

    const mode = useAppStore(state => state.mode)

    return (
        <MuiPagination
            count={Math.ceil(rowCount / paginationModel.pageSize)}
            page={page}
            sx={{
                '& .MuiPaginationItem-root': {
                    color: mode === 'light' ? '#000' : '#fff',
                    '&.Mui-selected': {
                        backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.2)' : '#95A4FC'
                    }
                }
            }}
            onChange={(event, value) => {
                changePage(value)
            }}
        />
    );
}

export default Pagination