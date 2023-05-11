import { useForm } from "react-hook-form";
import PasswordInput from "./PasswordInput";


export default {
    title: 'Components/PasswordInput',
    component: PasswordInput,
    argTypes: {
        mode: {
            type: 'string',
            defaultValue: 'light',
            options: ['light','dark'],
            control: {
                type: 'radio'
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
                type: 'select',
            }
        },
        icon: {
            type: 'object',
            defaultValue: null
        },
        iconSize: {
            type: 'number',
            defaultValue: 20
        },
        error: {
            type: 'boolean',
            defaultValue: false,
            options: [true,false],  
            control: {
                type: 'radio'
            }
        },
        errorMessage: {
            type: 'string',
            defaultValue: ''
        }
    }
}


const Template = args => {

    const {register,handleSubmit} = useForm();

    const onSubmit = (formData) => {
        alert(JSON.stringify(formData))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <PasswordInput {...args} inputProps={{...register(args.name)}}/>
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
    size: 'normal'
}


export const Small = Template.bind({})

Small.args = {
    label: 'Модель',
    name: 'model',
    size: 'small'
}


export const Error = Template.bind({})

Error.args = {
    label: 'Модель',
    name: 'model',
    size: 'normal',
    error: true,
    errorMessage: 'Ошибка, введены не верные данные'
}
