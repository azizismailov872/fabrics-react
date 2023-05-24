import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { setErrors } from '../../../helper'
import { Palette } from '@phosphor-icons/react'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Form/Input/Input'
import { createSchema } from '../../../validation/colors'
import { ColorsService } from '../../../services/ColorsService'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import Switch from '../../../components/Form/Switch/Switch'

const ColorsCreate = () => {

    const queryClient = useQueryClient()

    const { register, handleSubmit, reset, setError, formState: { errors } } = useForm({
        resolver: yupResolver(createSchema)
    })

    const mutation = useMutation({
        mutationFn: ColorsService.create
    })

    const [showPicker, setShowPicker] = useState(false);

    const onSubmit = (formData) => {
        const loadingTost = toast.loading('Сохранение...')
        mutation.mutate(formData, {
            onError: (error, variables, context) => {
                toast.error('Ошибка при сохранении данных', {
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
                queryClient.invalidateQueries(['getColors']);
            },
        })
    }

    return (
        <div className='pb-8 pt-2'>
            <div>
                <h2 className='text-xl font-medium md:text-2xl dark:text-primary-light text-dark-100'>Добавить цвет</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='py-3 px-1'>
                <div className='mb-3 w-[290px]'>
                    <Switch
                        name="showPicker"
                        label="Выбор цвета (color picker)"
                        checked={showPicker}
                        onChange={(e, value) => setShowPicker(value)}
                    />
                </div>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-3'>
                    <div className='grow md:grow-0 shrink-0 md:basis-[17rem]'>
                        <Input
                            name="name"
                            label="Название"
                            icon={Palette}
                            inputProps={{ ...register('name') }}
                            size="small"
                            className="w-full"
                            error={!!errors.name}
                            errorMessage={errors?.name?.message && errors.name.message}
                        />
                    </div>
                    <div className='grow md:grow-0 shrink-0 md:basis-[17rem]'>
                        <Input
                            name="hex_code"
                            label="Hex код цвета"
                            className="w-full"
                            size="small"
                            inputProps={{ ...register('hex_code') }}
                            error={!!errors.hex_code}
                            errorMessage={errors?.hex_code?.message && errors?.hex_code?.message}
                            type={showPicker ? 'color' : undefined}
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

export default ColorsCreate