import React from 'react'
import Button from '../../Button/Button'
import { At } from '@phosphor-icons/react'
import Input from '../../Form/Input/Input'
import PasswordInput from '../../Form/PasswordInput/PasswordInput'


const LoginForm = ({register,onSubmit,errors}) => {
    /* 
    *   Ширина формы: 
    *   1.Экраны самых меленкьх размеров до 350px - 300px (w-300px)
    *   2.экран от 350px до 400px - 350px (xxs:w-350px)
    *   3.Экраны от 400px до 640px - 380px (xs:w-380px)
    *   4.Экраны от 640 и до конца - 500px (sm:w-500px)
    */
    
    return (
        <div className='bg-primary-light mt-[55px] dark:bg-primary-gray w-[300px] xxs:w-[350px] xs:w-[380px] sm:w-[500px] rounded-md pt-5 pb-8 px-1'>
            <h1 className='text-2xl text-dark-100 dark:text-primary-light text-center font-medium mb-4'>Авторизация</h1>
            <form className='px-3 sm:px-10' onSubmit={onSubmit}>
                <div className='mb-4'>
                    <Input
                        fullWidth 
                        label="Почта" 
                        icon={At} 
                        name="email"  
                        error={!!errors?.email}
                        inputProps={{...register('email')}}
                        errorMessage={errors?.email?.message && errors?.email?.message }
                    />
                </div>
                <div className='mb-4'>
                    <PasswordInput
                        fullWidth 
                        label="Почта" 
                        name="password"
                        error={!!errors?.password}
                        errorMessage={errors?.password?.message && errors?.password?.message }  
                        inputProps={{...register('password')}}
                    />
                </div>
                <div>
                    <Button minWidth="100%" type="submit">
                        Вход
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm