import { Dialog, Modal } from "@mui/material";
import SortingForm from "./SortingForm";
import { useState } from "react";


export default {
    title: 'Components/Sorting Form',
    component: SortingForm,
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

const sortByOptions = [
    {
        id: 1,
        value: 'model',
        label: 'Модель',
    }
]

const sortOptions = [
    {
        id: 1,
        value: 'asc',
        label: 'По возрастанию'
    },
    {
        id: 2,
        value: 'desc',
        label: 'По Убыванию'
    }
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
                <SortingForm onSubmitFn={onSubmit} {...args} />
            </Modal>
        </div>
    )
}


export const Default = Template.bind({})

Default.args = {
    mode: 'light',
    sortByOptions: sortByOptions,
    sortOptions: sortOptions
}