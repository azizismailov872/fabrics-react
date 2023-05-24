import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MaterialService } from '../../../services/MaterialService'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Form/Input/Input'
import { Dna } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createSchema } from '../../../validation/materials'
import { toast } from 'react-hot-toast'
import { setErrors } from '../../../helper'

const MaterialsCreate = () => {

    const queryClient = useQueryClient()

    const {register,handleSubmit,reset,setError,formState: {errors}} = useForm({
        resolver: yupResolver(createSchema)
    })

    const mutation = useMutation({
        mutationFn: MaterialService.create
    })
    
    const onSubmit = (formData) => {
        const loadingTost = toast.loading('Сохранение...')
        mutation.mutate(formData,{
            onError: (error, variables, context) => {
                toast.error('Ошибка при сохранении данных',{
                    id: loadingTost
                });
                if (error.response.data?.errors) {
                    setErrors(error.response.data.errors, setError)
                }
            },
            onSuccess: (data, variables, context) => {
                reset()
                const message = data.data.message ? data.data.message : 'Данные успешно сохранены2'
                toast.success(message, {
                    id: loadingTost,
                });
                queryClient.invalidateQueries(['getMaterials']);
            },
        })
    }

    return (
        <div className='pb-8 pt-2'>
            <div>
                <h2 className='text-xl font-medium md:text-2xl dark:text-primary-light text-dark-100'>Добавить материал</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='py-3 px-1'>
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
                    <Button disabled={mutation.isLoading} type="submit">Отправить</Button>
                    <Button secondary onClick={() => reset()} type="button">Очистить</Button>
                </div>
            </form>
        </div>
    )
}

export default MaterialsCreate