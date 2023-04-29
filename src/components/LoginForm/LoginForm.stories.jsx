import LoginForm from "./LoginForm";


export default {
    title: 'Components/LoginForm',
    component: LoginForm,
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
    },
    parameters: {
        layout: 'fullscreen',
    },
}


const Template = args => {
    return (
        <div className="w-full h-full flex justify-center items-center bg-primary-blue dark:bg-black-100">
            <LoginForm {...args} />
        </div>
    )
}

export const Default = Template.bind({})

Default.args = {
    mode: 'light'
}