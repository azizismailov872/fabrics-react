import { Alert } from '@mui/material'
import { toast } from 'react-hot-toast'
import Button from '../../../components/Button/Button'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MaterialService } from '../../../services/MaterialService'
import FormLoader from '../../../components/Loaders/Form/FormLoader'
import { ColorsService } from '../../../services/ColorsService'

const ColorsView = () => {

    const {id} = useParams()

    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: ColorsService.deleteOne
    })

    const {data,isLoading} = useQuery({
        queryKey: ['getColor',id],
        queryFn: () =>  ColorsService.getColor(id),
        refetchOnWindowFocus: false,
    })


    const onDelete = async() => {
        const loadingTost = toast.loading('Удаление...')
        mutation.mutate(id,{
            onError: (error, variables, context) => {
                toast.error('Ошибка при удалении данных',{
                    id: loadingTost
                });
            },
            onSuccess: (data, variables, context) => {
                const message = data.data.message ? data.data.message : 'Данные успешно удалены'
                toast.success(message, {
                    id: loadingTost,
                });
                navigate('/colors')
            }
        })
    }

    console.log('data: ',data)

    return isLoading ? <FormLoader /> : (
        <div className='pb-8 pt-2'>
            <Alert className='mb-3' severity="warning">Внимание, перед удалением цвета посмотрите все <b>ткани</b> и <b>продукцию</b> где указан этот цвет, так как после удаления все данные об этом цвете будут удалены</Alert>
            <div className='flex justify-between mb-5 items-center'>
                <h2 className='text-xl font-medium md:text-2xl  dark:text-primary-light text-dark-100'>Название цвета: {data?.data?.data?.name}</h2>
            </div>
            <div className='flex justify-between mb-5 items-center'>
                <h2 className='text-xl font-medium md:text-2xl  dark:text-primary-light text-dark-100'>Цвет: {data?.data?.data?.hex_code ? <span className='inline-block w-[30px] h-[15px]' style={{backgroundColor: data.data.data.hex_code}}></span> : 'Пусто'}</h2>
            </div>
            <div className='flex gap-3'>
                <Button><Link to={`/fabrics?color_id=${id}`}>Посмотреть ткани</Link></Button>
                <Button disabled={mutation.isLoading} onClick={onDelete} warning>Удалить</Button>
            </div>
        </div>
    )
}

export default ColorsView