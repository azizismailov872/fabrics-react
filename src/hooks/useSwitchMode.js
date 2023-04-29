import { useEffect } from "react";
import useAppStore from "../store/store"

const switchMode = (mode) => {
    switch(mode){
        case 'light':
            if (document.querySelector('html').classList.contains('dark')) {
                document.querySelector('html').classList.remove('dark')
            }
            break
        case 'dark':
            if (!document.querySelector('html').classList.contains('dark')) {
                document.querySelector('html').classList.add('dark');
            }
            break
    }
}

const useSwitchMode = () => {
    const mode = useAppStore(state => state.mode);

    useEffect(() => {
        switchMode(mode)
    },[mode])
}

export default useSwitchMode;