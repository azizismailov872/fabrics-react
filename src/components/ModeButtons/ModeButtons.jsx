import useAppStore from '../../store/store'
import { IconButton } from '@mui/material'
import { Moon, Sun } from '@phosphor-icons/react'

const ModeButtons = () => {

    const toggleMode = useAppStore(state => state.toggleMode)

    const mode = useAppStore(state => state.mode)

    return (
        <div className='flex gap-2'>
            <IconButton onClick={() => toggleMode('light')}>
                {
                    <Sun className={`${mode === 'light' ? 'text-secondary-purple-dark' : 'text-black-100 dark:text-primary-light'}`} size={20} weight="regular" />
                }
            </IconButton>
            <IconButton onClick={() => toggleMode('dark')}>
                {
                    <Moon className={`${mode === 'dark' ? 'text-secondary-purple-dark' : 'text-black-100 dark:text-primary-light'}`} size={20} weight="light" />
                }
            </IconButton>
        </div>
    )
}

export default ModeButtons