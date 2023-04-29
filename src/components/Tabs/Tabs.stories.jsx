import { BrowserRouter } from "react-router-dom"
import Tabs from "./Tabs"
import { ProSidebarProvider } from "react-pro-sidebar"
import Wrapper from "../Wrapper/Wrapper"
import Sidebar from "../Sidebar/Sidebar"
import Content from "../Content/Content"
import Header from "../Header/Header"

export default {
    title: 'Components/Tabs',
    component: Tabs,
    argTypes: {
        mode: {
            type: 'string',
            defaultValue: 'light',
            options: ['light', 'dark'],
            control: {
                type: 'radio'
            }
        },
    },
   /*  parameters: {
        layout: 'fullscreen',
    }, */
}


const FullTemplate = args => {
    return (
        <BrowserRouter>
            <ProSidebarProvider>
                <Wrapper>
                    <Sidebar mode={args.mode} />
                    <Content>
                        <Header mode={args.mode} />
                        <div className="content px-4 py-2">
                            <h2 className="mb-4 text-2xl font-medium">Ткани</h2>
                            <Tabs {...args} />
                        </div>
                    </Content>
                </Wrapper>
            </ProSidebarProvider>
        </BrowserRouter>
    )
}

const Template = args =>  {
    return (
        <BrowserRouter>
            <Tabs {...args} />
        </BrowserRouter>
    )
}

export const Default = Template.bind({})

Default.args = {
    mode: 'light'
}

export const FullPage = FullTemplate.bind({})

FullPage.args = {
    mode: 'light'
}

FullPage.parameters = {
    layout: 'fullscreen',
}