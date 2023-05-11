import { CalendarCheck } from "@phosphor-icons/react";
import Select from "./Select";
import { Controller, useForm } from "react-hook-form";

const defaultOptions = [
    {
        id: 1,
        value: 'Красный',
    },
    {
        id: 2,
        value: 'Желтый',
    },
    {
        id: 3,
        value: 'Белый',
    },
    {
        id: 4,
        value: 'Синий',
    },
    {
        id: 5,
        value: 'Зеленый',
    },
]

export default {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        mode: {
            type: 'string',
            defaultValue: 'light',
            options: ['light', 'dark'],
            control: {
                type: 'radio'
            }
        },
        name: {
            type: 'string',
            description: 'Имя поля',
            defaultValue: 'select'
        },
        label: {
            type: 'string',
            description: 'Название поля',
            defaultValue: 'Select'
        },
        multiple: {
            type: 'boolean',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'select',
            }
        },
        size: {
            type: 'string',
            description: 'Размер',
            defaultValue: 'normal',
            options: ['small', 'normal'],
            control: {
                type: 'select',
            }
        },
        options: {
            type: 'array',
        },
        icon: {
            type: 'object',
            description: 'Icon'
        },
        iconSize: {
            type: 'number',
            decsription: 'Icon size',
            defaultValue: 24
        },
        iconClass: {
            type: 'string',
            description: 'Icon class'
        },
        error: {
            type: 'boolean',
            description: 'error',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'select',
            }
        },
        errorMessage: {
            type: 'string',
            description: 'errorMessage',
        }
    }
}

const Template = args => {

    const { control, handleSubmit } = useForm();

    const onSubmit = (formData) => {
        alert(JSON.stringify(formData))
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                render={({ field }) => <Select {...field}  {...args} />}
                name={args.name}
                control={control}
                defaultValue={args.multiple ? [] : ''}
            />
            <div>
                <button className="mt-2 px-3 py-1 rounded-md bg-cyan-700 text-white" type="submit">Отправить</button>
            </div>
        </form>
    )
}

export const Default = Template.bind({})

Default.args = {
    label: 'Select',
    name: 'colors',
    size: 'normal',
    options: defaultOptions,
}

export const Small = Template.bind({})

Small.args = {
    label: 'Select',
    name: 'colors',
    size: 'small',
    options: defaultOptions
}

export const Icon = Template.bind({})

Icon.args = {
    label: 'Select',
    name: 'colors',
    size: 'small',
    options: defaultOptions,
    icon: CalendarCheck,
    iconSize: 24,
}

export const Multiple = Template.bind({})

Multiple.args = {
    label: 'Select',
    name: 'colors',
    size: 'normal',
    options: defaultOptions,
    icon: CalendarCheck,
    iconSize: 24,
    multiple: true
}

export const Error = Template.bind({})

Error.args = {
    label: 'Select',
    name: 'colors',
    size: 'small',
    options: defaultOptions,
    icon: CalendarCheck,
    iconSize: 24,
    error: true,
    errorMessage: 'Ошибка, введены неверные данные'
}