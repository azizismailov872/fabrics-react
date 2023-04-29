import { create } from "zustand";
import { devtools } from 'zustand/middleware'

const getCurrentMode = () => {
    return localStorage.getItem('mode') ? localStorage.getItem('mode') : 'light'; 
}

const useAppStore = create(devtools(
    (set,get) => ({
        initialized: false,
        auth: false,
        user: null,
        mode: getCurrentMode(),
        toggleMode: (mode) => {
            localStorage.removeItem('mode');
            localStorage.setItem('mode',mode);
            set({
                mode: mode
            })
        },
        setAuth: (auth,user = null) => {
            set({
                auth: auth,
                user: user ? user : null,
                initialized: true
            })
        },
        setInitialized: (initialized) => {
            set({
                initialized: initialized
            })
        }
    })
))

export default useAppStore;