import { Controller, useForm } from 'react-hook-form';
import DatePicker from './DatePicker'
import dayjs from 'dayjs';


export default {
    title: 'Components/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: {
        mode: {
            type: 'string',
            defaultValue: 'light',
            options: ['light','dark'],
            description: 'Тема приложения',
            control: {
                type: 'inline-radio'
            }
        },
        name: {
            type: 'string',
            defaultValue: 'date',
            description: 'Имя поля'
        },
        label: {
            type: 'string',
            defaultValue: 'Дата',
            description: 'Название поля'
        },
        size: {
            type: 'string',
            description: 'Размер',
            defaultValue: 'normal',
            options: ['small','normal'],
            control: {
                type: 'inline-radio',
            }
        },
        error: {
            type: 'boolean',
            defaultValue: false,
            options: [true,false],  
            description: 'Наличие ошибок',
            control: {
                type: 'radio'
            }
        },
        errorMessage: {
            type: 'string',
            defaultValue: '',
            description: 'Сообщение ошибки'
        },
    }
}

const Template = args => {

    const {control,handleSubmit} = useForm();

    const onSubmit = (formData) => {
        alert(JSON.stringify(formData))
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <Controller
                render={({ field }) => <DatePicker {...args} {...field}/>}
                name={args.name}
                control={control}
                defaultValue={args.defaultValue ? args.defaultValue : null}
            />
            <div>
                <button className="mt-2 px-3 py-1 rounded-md bg-cyan-700 text-white" type="submit">Отправить</button>
            </div>
        </form>
    )
}

export const Default = Template.bind({})

Default.args = {
    name: 'date',
    label: 'Дата',
}


export const Small = Template.bind({})

Small.args = {
    name: 'date',
    label: 'Дата',
    size: 'small'
}

export const DefaultValue = Template.bind({})

DefaultValue.args = {
    name: 'date',
    label: 'Дата',
    size: 'small',
    defaultValue: dayjs()
}

export const Error = Template.bind({})

Error.args = {
    label: 'Дата',
    name: 'date',
    size: 'normal',
    error: true,
    errorMessage: 'Ошибка, введены неверные данные'
}