import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { FabricsService } from '../../../services/FabricsService';
import useModal from '../../../hooks/useModal';
import { ColorsService } from '../../../services/ColorsService';
import { toast } from 'react-hot-toast';
import { setErrors } from '../../../helper';
import { isArray, map } from 'lodash';
import FabricsUpdate from './FabricsUpdate';
import { updateSchema } from '../../../validation/fabrics';
import FormLoader from '../../../components/Loaders/Form/FormLoader';
import { MaterialService } from '../../../services/MaterialService';


const FabricsUpdateContainer = () => {

    const {id} = useParams()

    const navigate = useNavigate()

    const queryClient = useQueryClient()

    const [modal, openModal, closeModal] = useModal()

    const mutation = useMutation({
        mutationFn: FabricsService.update
    })

    const {register,control,handleSubmit,formState: {errors},reset,setError} = useForm({
        resolver: yupResolver(updateSchema)
    })

    const {data: fabric,isLoading: isFabricLoading} = useQuery({
        queryKey: ['getFabric',id],
        queryFn: () =>  FabricsService.getFabric(id),
        refetchOnWindowFocus: false,
        onSuccess: fabric => {
            if(fabric && fabric?.data?.data) {
                reset({
                    ...fabric.data.data,
                })
            }
        }
    })

    const {data: colors, isLoading: isColorsLoading} = useQuery({
        queryKey: ['getColorsList'],
        queryFn: ColorsService.getColorsList,
        refetchOnWindowFocus: false,
        onSuccess: colors => console.log('colors: ',colors)
    })

    const {data: materials,isLoading: isMaterialsLoading} = useQuery({
        queryKey: ['getMaterialsList'],
        queryFn: MaterialService.getMatrialsList,
        refetchOnWindowFocus: false
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
                queryClient.invalidateQueries('getFabric')
                navigate('/fabrics')
            },
        })
    }

    const onReset = () => {
        reset({
            model: null,
            quantity: null,
            materials: null,
            colors: []
        })
    }

    return (isFabricLoading || isColorsLoading || isMaterialsLoading) ? <FormLoader /> : (
        <FabricsUpdate 
            register={register}
            control={control}
            errors={errors}
            onSubmit={handleSubmit(onSubmit)}
            onReset={onReset}
            colors={colors}
            materials={materials}
            title={`Редактировать ${fabric.data.data.model}`}
            modal={modal}
            openModal={openModal}
            closeModal={closeModal}
            isLoading={mutation.isLoading}
        />
    )
}

export default FabricsUpdateContainer