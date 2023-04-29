import Header from "./Header";
import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "../Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import Content from "../Content/Content";


export default {
    title: 'Components/Header',
    component: Header,
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
                    <Sidebar mode={args.mode}/>
                    <Content>
                        <Header {...args} />
                        content
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