import { CurrencyEth, EyedropperSample } from "@phosphor-icons/react";
import Input from "./Input";
import { useForm } from "react-hook-form";


export default {
    title: 'Components/Input',
    component: Input,
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
        label: {
            type: 'string',
            description: 'Название поля',
            defaultValue: 'Модель'
        },
        name: {
            type: 'string',
            description: 'Имя поля',
            defaultValue: 'model'
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
        icon: {
            type: 'object',
            defaultValue: null,
            description: 'Иконка для поля'
        },
        iconSize: {
            type: 'number',
            default: 30
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

    const {register,handleSubmit} = useForm();

    const onSubmit = (formData) => {
        alert(JSON.stringify(formData))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...args} inputProps={{...register(args.name)}}/>
            <div>
                <button className="mt-2 px-3 py-1 rounded-md bg-cyan-700 text-white" type="submit">Отправить</button>
            </div>
        </form>
    )
}

export const Default = Template.bind({})

Default.args = {
    label: 'Модель',
    name: 'model',
    size: 'normal',
}

export const Small = Template.bind({})

Small.args = {
    label: 'Модель',
    name: 'model',
    size: 'small',
}

export const Icon = Template.bind({})

Icon.args = {
    label: 'Модель',
    name: 'model',
    size: 'normal',
    icon: CurrencyEth
}

export const Number = Template.bind({})

Number.args = {
    label: 'Колличество',
    name: 'quantity',
    size: 'normal',
    icon: CurrencyEth,
    type: 'number',
}

export const Color = Template.bind({})

Color.args = {
    label: 'Цвет',
    name: 'color',
    size: 'normal',
    icon: EyedropperSample,
    type: 'color',
    minWidth: '220px'
}

export const Error = Template.bind({})

Error.args = {
    label: 'Модель',
    name: 'model',
    size: 'normal',
    icon: CurrencyEth,
    error: true,
    errorMessage: 'Ошибка, введены неверные данные'
}