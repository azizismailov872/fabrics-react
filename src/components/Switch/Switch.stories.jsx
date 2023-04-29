import Switch from "./Switch";


export default {
    title: 'Components/Switch',
    component: Switch,
    argTypes: {
        mode: {
            type: 'string',
            defaultValue: 'light',
            options: ['light', 'dark'],
            control: {
                type: 'radio'
            }
        },
    }
}

const Template = args => <Switch {...args} />

export const Default = Template.bind({})

Default.args = {
    mode: 'dark',
    label: 'Модель'
}