import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "./Sidebar";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import Content from "../Content/Content";


export default {
    title: 'Components/Sidebar',
    component: Sidebar,
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
    parameters: {
        layout: 'fullscreen',
    },
}


const Template = args => {
    return (
        <BrowserRouter>
            <ProSidebarProvider>
                <Wrapper>
                    <Sidebar {...args} />
                    <Content>
                        Content
                    </Content>
                </Wrapper>
            </ProSidebarProvider>
        </BrowserRouter>
    )
}

export const Default = Template.bind({})

Default.args = {
    mode: 'light'
}
