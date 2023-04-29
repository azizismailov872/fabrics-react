import LoginForm from '../../components/LoginForm/LoginForm'
import { useForm } from 'react-hook-form'
import LoginHeader from '../../components/LoginHeader/LoginHeader'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserService } from '../../services/UserService'
import { toast } from 'react-hot-toast'
import {yupResolver} from '@hookform/resolvers/yup'
import { loginSchema } from '../../validation/login/login'
import { setErrors } from '../../helper'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: UserService.login
    })

    const {register,reset,handleSubmit,setError,formState: {errors}} = useForm({
        resolver: yupResolver(loginSchema)
    })

    const login = async(formData) => {
        const loadingToast = toast.loading('Авторизация');
        mutation.mutate(formData,{
            onError: (error, variables, context) => {
                toast.error('Ошибка авторизации',{
                    id: loadingToast
                });
                console.log('errors: ',error.response.data)
            },
            onSuccess: (data, variables, context) => {
                if(data.response?.status === 422) {
                    toast.error('Ошибка авторизации',{
                        id: loadingToast
                    });
                    setErrors(data.response.data,setError)
                    
                }
                else if (data.status === 204) {
                    const message = data?.data?.message ? data.data.message : 'Вход выполнен'
                    toast.success(message, {
                        id: loadingToast,
                    });
                    queryClient.invalidateQueries('auth')
                    reset()
                    navigate('/')
                }
            },
        })
    }

    return (
        <div className='w-full h-full bg-primary-purple dark:bg-black-100 flex justify-center items-center px-[10px]'>
            <LoginHeader />
            <LoginForm errors={errors} register={register} onSubmit={handleSubmit(login)} />
        </div>
    )
}

export default Login