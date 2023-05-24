import React from 'react'
import { ColorsService } from '../../../services/ColorsService'
import { useQuery } from '@tanstack/react-query'
import TableLoader from '../../../components/Loaders/Table/TableLoader'
import DataTable from '../../../components/DataTable/DataTable'
import { dataTableColumns } from '../data'

const ColorsList = () => {

    const { data: colors, isLoading } = useQuery({
        queryKey: ['getColors'],
        queryFn: ColorsService.getColors,
        onSuccess: data => console.log('colors: ', data)
    })


    return isLoading ? <TableLoader /> : (
        <div className='pb-8 pt-2'>
            <div>
                <DataTable
                    data={colors?.data?.data ? colors.data.data : []}
                    rowCount={colors?.data?.total ? colors.data.total : 0}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 30
                            }
                        }
                    }}
                    columns={dataTableColumns}
                    boxClass={
                        (colors?.data?.total && colors.data.total > 10) ? 'h-[95vh]' : 'h-[65vh]'
                    }
                />
            </div>
        </div>
    )
}

export default ColorsList