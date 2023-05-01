import { useState } from "react"

const useModal = () => {
    const [modal,setModal] = useState({
        isOpen: false,
        modal: ''
    });


    const closeModal = () => {
        setModal({
            ...modal,
            isOpen: false
        });
    }

    const openModal = (modalName) => {
        setModal({
            isOpen: true,
            modal: modalName
        })
    }

    return [modal,openModal,closeModal]
}

export default useModal