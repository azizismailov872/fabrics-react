
import { toast } from 'react-hot-toast'

import Button from '../../Button/Button'
import { useForm } from 'react-hook-form'
import { setErrors } from '../../../helper'
import { forwardRef, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { createSchema } from '../../../validation/colors'
import { ColorsService } from '../../../services/ColorsService'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Input from '../../Form/Input/Input'
import Switch from '../../Form/Switch/Switch'

const ColorForm = ({onSuccessFn,...props}, ref) => {

    const queryClient = useQueryClient();

    const {register,setError,handleSubmit,reset,formState: {errors}} = useForm({
        resolver: yupResolver(createSchema)
    })

    const mutation = useMutation({
        mutationFn: ColorsService.create
    })

    const [showPicker,setShowPicker] = useState(false);

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
                queryClient.invalidateQueries(['getColorsList']);
            },
        })
    }

    return (
        <div className='bg-primary-light dark:bg-primary-darkBlue p-4 rounded-md w-[300px] xs:w-[380px] sm:w-[500px]'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3 w-[290px]'>
                    <Switch 
                        name="showPicker"
                        label="Выбор цвета (color picker)"
                        checked={showPicker}
                        onChange={(e,value) => setShowPicker(value)}
                    />
                </div>
                <div className='mb-4'>
                    <Input 
                        name="name"
                        label="Название цвета"
                        size="small"
                        inputProps={{ ...register('name') }}
                        error={!!errors.name}
                        className="w-full"
                        errorMessage={errors?.name?.message && errors?.name?.message }
                    />
                </div>
                <div className='mb-4'>
                    <Input 
                        name="hex_code"
                        label="Hex код цвета"
                        className="w-full"
                        size="small"
                        inputProps={{ ...register('hex_code') }}
                        error={!!errors.hex_code}
                        errorMessage={errors?.hex_code?.message && errors?.hex_code?.message }
                        type={showPicker ? 'color' : 'default'}
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

export default forwardRef(ColorForm)