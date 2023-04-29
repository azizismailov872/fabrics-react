import { forwardRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Switch from '../Switch/Switch'
import Button from '../Button/Button'
import { FormControlLabel, FormGroup } from '@mui/material'
import '../../index.css'


const VisibilityForm = ({ sortByOptions, sortOptions, onSubmitFn,fields,defaultValues, ...props }, ref) => {

    const { register, control, handleSubmit } = useForm()

    const onSubmit = (formData) => {
        onSubmitFn && onSubmitFn(formData)
    }


    return (
        <div className='bg-primary-light dark:bg-black-40 p-4 rounded-md w-[300px] xs:w-[380px] sm:w-[500px]'>
            <form className='px-2 py-4' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-2xl font-medium tex-black-100 dark:text-primary-light mb-4'>Показать/Скрыть поля</h2>
                <div className='flex justify-center md:justify-start flex-wrap py-1 px-2'>
                    {
                        fields?.length && fields.map(field =>
                            <div className='flex-1' key={field.id}>
                                <Controller
                                    control={control}
                                    name={field.label}
                                    render={({
                                        field: { onChange, onBlur, value, name, ref },
                                    }) => (
                                        <FormGroup>
                                            <FormControlLabel control={<Switch onBlur={onBlur}
                                                onChange={onChange}
                                                checked={value}
                                                name={name}
                                                inputRef={ref} />} label={field.title} />
                                        </FormGroup>
                                    )}
                                />
                            </div>
                        )
                    }
                </div>
                <div className='mt-4'>
                    <Button type="submit">
                        Отправить
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default forwardRef(VisibilityForm)
