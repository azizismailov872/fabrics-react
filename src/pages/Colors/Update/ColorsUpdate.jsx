import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { setErrors } from '../../../helper'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
import { updateSchema } from '../../../validation/colors'
import { MaterialService } from '../../../services/MaterialService'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Form/Input/Input'
import FormLoader from '../../../components/Loaders/Form/FormLoader'
import { Palette } from '@phosphor-icons/react'
import Switch from '../../../components/Form/Switch/Switch'
import { ColorsService } from '../../../services/ColorsService'
import { useState } from 'react'

const ColorsUpdate = () => {
    const {id} = useParams()

    const navigate = useNavigate()

    const queryClient = useQueryClient()

    const [showPicker, setShowPicker] = useState(false);

    const mutation = useMutation({
        mutationFn: ColorsService.update
    })

    const {register,handleSubmit,formState: {errors},reset,setError} = useForm({
        resolver: yupResolver(updateSchema)
    })

    const {data,isLoading} = useQuery({
        queryKey: ['getColor',id],
        queryFn: () =>  ColorsService.getColor(id),
        refetchOnWindowFocus: false,
        onSuccess: color => {
            if(color && color?.data?.data) {
                reset({
                    ...color.data.data,
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
                const message = data.data.message ? data.data.message : 'Данные успешно сохранены'
                toast.success(message, {
                    id: loadingTost,
                });
                queryClient.invalidateQueries('getColor')
                navigate('/colors')
            },
        })
    }

    return isLoading ? <FormLoader /> :  (
        <div className='pb-8 pt-2'>
            <div>
                <h2 className='text-xl font-medium md:text-2xl dark:text-primary-light text-dark-100'>Редактировать цвет {data?.data?.data?.name}</h2>
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
                            type={showPicker ? 'color' : 'text'}
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

export default ColorsUpdate