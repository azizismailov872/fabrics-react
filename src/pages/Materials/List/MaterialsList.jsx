import { dataTableColumns } from '../data'
import useDelete from '../../../hooks/useDelete'
import { useQuery } from '@tanstack/react-query'
import Panel from '../../../components/Panel/Panel'
import DataTable from '../../../components/DataTable/DataTable'
import { MaterialService } from '../../../services/MaterialService'
import TableLoader from '../../../components/Loaders/Table/TableLoader'

const MaterialsList = () => {

    const { data: materials, isLoading } = useQuery({
        queryKey: ['getMaterials'],
        queryFn: () => MaterialService.getMaterials(),
        onSuccess: data => console.log('materials: ', data)
    })

    return isLoading ? <TableLoader /> : (
        <div className='pb-8 pt-2'>
            <div>
                <DataTable
                    data={materials?.data?.data ? materials.data.data : []}
                    rowCount={materials?.data?.total ? materials.data.total : 0}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 30
                            }
                        }
                    }}
                    columns={dataTableColumns}
                    boxClass={
                        (materials?.data?.total && materials.data.total > 10) ? 'h-[95vh]' : 'h-[65vh]'
                    }
                />
            </div>
        </div>
    )
}

export default MaterialsList