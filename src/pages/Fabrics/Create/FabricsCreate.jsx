import { Controller, useForm } from 'react-hook-form'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import SelectChip from '../../../components/SelectChip/SelectChip'
import { Calculator, Dna, Hash, Palette} from "@phosphor-icons/react"
import {useMutation, useQuery } from '@tanstack/react-query'
import { ColorsService } from '../../../services/ColorsService'
import { createSchema } from '../../../validation/fabrics/create'
import {yupResolver} from '@hookform/resolvers/yup'
import { Modal } from '@mui/material'
import ColorForm from '../../../components/ColorForm/ColorForm'
import useModal from '../../../hooks/useModal'
import { toast } from 'react-hot-toast'
import { FabricsService } from '../../../services/FabricsService'
import { setErrors } from '../../../helper'

const FabricsCreate = () => {

    const {data} = useQuery({
        queryKey: ['getColorsList'],
        queryFn: ColorsService.getColorsList,
        refetchOnWindowFocus: false
    })

    const mutation = useMutation({
        mutationFn: FabricsService.create
    })

    const {register,control,handleSubmit,formState: {errors},reset,setError} = useForm({
        resolver: yupResolver(createSchema)
    });

    const [modal, openModal, closeModal] = useModal();

    const onSubmit = (formData) => {
        const loadingTost = toast.loading('Сохранение...')
        mutation.mutate(formData,{
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
                reset()
                const message = data.data.message ? data.data.message : 'Данные успешно сохранены'
                toast.success(message, {
                    id: loadingTost,
                });
            },
        })
    }

    const renameKeys = (data,key1,key2) => {
        return JSON.parse(JSON.stringify(data).replaceAll(key1, key2))
    }

    return (
        <div className='pb-8 pt-2'>
            <div className='flex justify-between mb-5 items-center'>
                <h2 className='text-xl font-medium md:text-2xl lg:text-3xl dark:text-primary-light text-dark-100'>Добавить модель</h2>
                <button onClick={() => openModal('colorForm')} className='text-stone-400'>Добавить цвет +</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='py-3 px-1'>
                <div className='flex flex-col md:flex-row gap-3'>
                    <div className='grow'>
                        <Input
                            name="model"
                            label="Модель"
                            icon={Hash}
                            inputProps={{ ...register('model') }}
                            size="small"
                            className="w-full"
                            error={!!errors.model}
                            errorMessage={errors?.model?.message && errors.model.message }
                        />
                    </div>
                    <div className='grow'>
                        <Input
                            name="quantity"
                            label="Колличество"
                            icon={Calculator}
                            inputProps={{ ...register('quantity') }}
                            size="small"
                            type="number"
                            className="w-full"
                            error={!!errors.quantity}
                            errorMessage={errors?.quantity?.message && errors.quantity.message }
                        />
                    </div>
                    <div className='grow'>
                        <Input
                            name="materials"
                            label="Материалы"
                            icon={Dna}
                            inputProps={{ ...register('materials') }}
                            size="small"
                            className="w-full"
                            error={!!errors.materials}
                            errorMessage={errors?.materials?.message && errors?.materials?.message}
                        />
                    </div>
                    <div className='grow'>
                         <Controller
                            render={({ field }) => <SelectChip 
                                                    {...field} 
                                                    size="small"
                                                    label="Цвета"
                                                    className="w-full"
                                                    icon={Palette}
                                                    minWidth="180px"
                                                    maxWidth="250px" 
                                                    options={
                                                        data?.data?.data ? renameKeys(data.data.data,'name','value') : []
                                                    }
                                                    error={!!errors.colors}
                                                    errorMessage={errors?.colors?.message && errors?.colors?.message}
                                                    />
                            }
                            name="colors"
                            control={control}
                            defaultValue={[]}
                        />
                    </div>
                </div>
                <div className='mt-4 flex gap-3'>
                    <Button type="submit">Отправить</Button>
                    <Button onClick={() => reset()} type="button" secondary>Очистить</Button>
                </div>
            </form>
            <Modal
                open={modal.isOpen}
                onClose={closeModal}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ColorForm onSuccessFn={closeModal} />
            </Modal>
        </div>
    )
}

export default FabricsCreate