import Button from "./Button";


export default {
    title: 'Components/Button',
    component: Button,
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
        primary: {
            type: 'boolean',
            defaultValue: true,
            description: 'Первый вариант оформления кнопки - по умолчанию'
        },
        onClick: {
            type: 'function',
            description: 'Функция обработчик события клика'
        },
        secondary: {
            type: 'boolean',
            defaultValue: false,
            description: 'Второй вариант оформления кнопки'
        },
        isLoading: {
            type: 'boolean',
            defaultValue: false,
            description: 'Состояние загрузки'
        },
        className: {
            type: 'string',
            defaultValue: null,
            description: 'Класс для кнопки, если указать класс пропадут дефолтные стили'
        },
        minWidth: {
            type: 'string',
            defaultValue: null,
            description: 'Минимальная ширина'
        }
    }
}


const Template = args => {
    return (
        <Button {...args}>
            {
                args.children ? args.children : 'Кнопка'
            }
        </Button>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    mode: 'light',
    onClick: () => alert('Hello world'),
}

export const Secondary = Template.bind({})

Secondary.args = {
    mode: 'light',
    onClick: () => alert('Hello world'),
    secondary: true,
}

export const Warning = Template.bind({})

Warning.args = {
    mode: 'light',
    onClick: () => alert('Hello world'),
    warning: true,
    children: 'Warning'
}

export const Loading = Template.bind({})

Loading.args = {
    mode: 'light',
    onClick: () => alert('Hello world'),
    children: 'Loading...',
    isLoading: true,
}