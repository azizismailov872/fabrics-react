import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { setErrors } from '../../../helper'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
import { updateSchema } from '../../../validation/materials'
import { MaterialService } from '../../../services/MaterialService'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Form/Input/Input'
import { Dna } from '@phosphor-icons/react'
import FormLoader from '../../../components/Loaders/Form/FormLoader'

const MaterialsUpdate = () => {
    const {id} = useParams()

    const navigate = useNavigate()

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: MaterialService.update
    })

    const {register,handleSubmit,formState: {errors},reset,setError} = useForm({
        resolver: yupResolver(updateSchema)
    })

    const {data,isLoading} = useQuery({
        queryKey: ['getMaterial',id],
        queryFn: () =>  MaterialService.getMaterial(id),
        refetchOnWindowFocus: false,
        onSuccess: material => {
            if(material && material?.data?.data) {
                reset({
                    ...material.data.data,
                })
            }
        }
    })

    const onSubmit = async(formData) => {
        const loadingTost = toast.loading('Сохранение...')
        mutation.mutate({id,data: formData},{
            onError: (error, variables, context) => {
                console.log('error: ',error)
                toast.error('Ошибка при сохранении данных',{
                    id: loadingTost
                });
                if (error.response.data?.errors) {
                    setErrors(error.response.data.errors, setError)
                }
            },
            onSuccess: (data, variables, context) => {
                const message = data.data.message ? data.data.message : 'Данные успешно сохранены2'
                toast.success(message, {
                    id: loadingTost,
                });
                queryClient.invalidateQueries('getMaterial')
                navigate('/materials')
            },
        })
    }

    return isLoading ? <FormLoader /> : (
        <div className='pb-8 pt-2'>
            <div className='flex justify-between mb-5 items-center'>
                <h2 className='text-xl font-medium md:text-2xl  dark:text-primary-light text-dark-100'>Редактировать {data?.data?.data?.name}</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-3'>
                    <div className='grow md:grow-0 shrink-0 md:basis-[17rem]'>
                        <Input
                            name="name"
                            label="Название"
                            icon={Dna}
                            inputProps={{ ...register('name') }}
                            size="small"
                            className="w-full"
                            error={!!errors.name}
                            errorMessage={errors?.name?.message && errors.name.message}
                        />
                    </div>
                </div>
                <div className='mt-4 flex gap-3'>
                    <Button type="submit">Отправить</Button>
                    <Button onClick={() => reset()} type="button" secondary>Очистить</Button>
                </div>
            </form>
        </div>
    )
}

export default MaterialsUpdate