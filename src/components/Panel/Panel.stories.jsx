import Panel from "./Panel";


export default {
    title: 'Components/Panel',
    component: Panel,
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
    }
}

const Template = args => <Panel {...args} />

export const Default = Template.bind({})

Default.args = {
    mode: 'light'
}