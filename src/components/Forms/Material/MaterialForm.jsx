
import { toast } from 'react-hot-toast'

import Button from '../../Button/Button'
import { useForm } from 'react-hook-form'
import { setErrors } from '../../../helper'
import { forwardRef, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { createSchema } from '../../../validation/materials'
import { MaterialService } from '../../../services/MaterialService'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Input from '../../Form/Input/Input'

const MaterialForm = ({onSuccessFn,...props}, ref) => {

    const queryClient = useQueryClient();

    const {register,setError,handleSubmit,reset,formState: {errors}} = useForm({
        resolver: yupResolver(createSchema)
    })

    const mutation = useMutation({
        mutationFn: MaterialService.create
    })

    const onSubmit  = async(formData) => {
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
                onSuccessFn && onSuccessFn()
                const message = data.data.message ? data.data.message : 'Данные успешно сохранены2'
                toast.success(message, {
                    id: loadingTost,
                });
                queryClient.invalidateQueries(['getMaterialsList']);
            },
        })
    }

    return (
        <div className='bg-primary-light dark:bg-primary-darkBlue p-4 rounded-md w-[300px] xs:w-[380px] sm:w-[500px]'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <Input 
                        name="name"
                        label="Название материала"
                        size="small"
                        inputProps={{ ...register('name') }}
                        error={!!errors.name}
                        className="w-full"
                        errorMessage={errors?.name?.message && errors?.name?.message }
                    />
                </div>
                <div className='flex gap-3'>
                    <Button type="submit">Отправить</Button>
                    <Button secondary onClick={() => reset()} type="button">Очистить</Button>
                </div>
            </form>
        </div>
    )
}

export default forwardRef(MaterialForm)