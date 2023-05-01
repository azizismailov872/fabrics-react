import { Controller, useForm } from 'react-hook-form'
import Select from '../Select/Select'
import Button from '../Button/Button'
import { forwardRef, useEffect } from 'react'
import '../../index.css'


const SortingForm = ({sortByOptions,sortOptions,onSubmitFn,defaultValue,defaultSortingModel,resetSort,...props},ref) => {

    const { register, control, handleSubmit,reset} = useForm()

    useEffect(() => {
        reset({
            sortBy: defaultValue.sortBy,
            sort: defaultValue.sort
        })
    },[])

    const onSubmit = (formData) => {
        onSubmitFn && onSubmitFn(formData)
    }

    const onReset = () => {
        resetSort()
        defaultSortingModel && reset({
            ...defaultSortingModel
        })
    }


    return (
        <div className='bg-primary-light dark:bg-primary-darkBlue p-4 rounded-md w-[300px] xs:w-[380px] sm:w-[500px]'>
            <form className='px-2 py-4' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-2xl font-medium tex-black-100 dark:text-primary-light mb-4'>Сортровка</h2>
                <div className='flex flex-col'>
                    <div className='mb-4'>
                        <Controller
                            render={({ field }) => <Select {...field} optionValue="value" options={sortByOptions} 
                            label="Поле сортировки"
                            fullWidth
                            size="small"
                            />}
                            name="sortBy"
                            control={control}
                            defaultValue=""
                        />
                    </div>
                    <div>
                        <Controller
                            render={({ field }) => <Select {...field} optionValue="value" options={sortOptions} 
                            label="Тип сортировки"
                            fullWidth
                            size="small"
                            />}
                            name="sort"
                            control={control}
                            defaultValue=""
                        />
                    </div>
                </div>
                <div className='mt-4 flex gap-3'>
                    <Button type="submit">
                        Отправить
                    </Button>
                    <Button type="button" secondary onClick={onReset}>
                        Сбросить
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default forwardRef(SortingForm)
