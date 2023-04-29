import { Dialog, Modal } from "@mui/material";
import VisibilitForm from "./VisibilityForm";
import { useState } from "react";


export default {
    title: 'Components/Visibility Form',
    component: VisibilitForm,
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

const visibilityFields = [
    {
        id: 1,
        label: 'model',
        title: 'Модель',
    },
    {
        id: 2,
        label: 'quantity',
        title: 'Колличество',
    },
    {
        id: 3,
        label: 'materials',
        title: 'Материалы',
    },
    {
        id: 4,
        label: 'colors',
        title: 'цвета',
    },
]


const Template = args => {

    const [isModalOpen, setModalOpen] = useState(true)

    const handleClose = () => setModalOpen(false)

    const onSubmit = (formData) => {
        alert(JSON.stringify(formData))
    }

    return (
        <div>
            <button onClick={() => setModalOpen(true)}>Open modal</button>
            <Modal
                open={isModalOpen}
                onClose={handleClose}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <VisibilitForm fields={visibilityFields} onSubmitFn={onSubmit} {...args} />
            </Modal>
        </div>
    )
}


export const Default = Template.bind({})

Default.args = {
    mode: 'light',
}