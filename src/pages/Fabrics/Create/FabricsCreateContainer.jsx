import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react'
import { ColorsService } from '../../../services/ColorsService';
import { FabricsService } from '../../../services/FabricsService';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useModal from '../../../hooks/useModal';
import { setErrors } from '../../../helper';
import { toast } from 'react-hot-toast';
import { createSchema } from '../../../validation/fabrics';
import FormLoader from '../../../components/Loaders/Form/FormLoader';
import FabricsCreate from './FabricsCreate';
import { MaterialService } from '../../../services/MaterialService';


const FabricsCreateContainer = () => {

    const {data: colorsData,isLoading: isColorsLoading} = useQuery({
        queryKey: ['getColorsList'],
        queryFn: ColorsService.getColorsList,
        refetchOnWindowFocus: false
    })

    const {data: materialsData,isLoading: isMaterialsLoading} = useQuery({
        queryKey: ['getMaterialsList'],
        queryFn: MaterialService.getMatrialsList,
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

    const onReset = () => {
        reset()
    }

    return (isColorsLoading || isMaterialsLoading)  ? <FormLoader /> : (
        <FabricsCreate 
            register={register}
            control={control}
            errors={errors}
            colorOptions={colorsData?.data?.data ? colorsData.data.data : []}
            materialOptions={materialsData?.data?.data ? materialsData.data.data : []}
            onSubmit={handleSubmit(onSubmit)}
            onReset={onReset}
            modal={modal}
            openModal={openModal}
            closeModal={closeModal}
        />
    )
}

export default FabricsCreateContainer