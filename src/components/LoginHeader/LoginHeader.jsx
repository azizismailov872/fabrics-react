import React from 'react'
import useAppStore from '../../store/store'
import { IconButton } from '@mui/material'
import { Moon, Sun } from '@phosphor-icons/react'

const LoginHeader = () => {

    const toggleMode = useAppStore(state => state.toggleMode)

    return (
        <header className='w-full h-[55px] shadow-md absolute top-0 left-0 z-10'>
            <nav className='w-full h-full px-6 py-2 flex justify-end gap-2'>
                <IconButton onClick={() => toggleMode('light')}>
                    {
                        <Sun className='text-black-100 dark:text-primary-light' size={20} weight="light" />
                    }
                </IconButton>
                <IconButton onClick={() => toggleMode('dark')}>
                    {
                        <Moon className='text-black-100 dark:text-primary-light' size={20} weight="light" />
                    }
                </IconButton>
            </nav>
        </header>
    )
}

export default LoginHeader