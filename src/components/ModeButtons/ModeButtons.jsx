import useAppStore from '../../store/store'
import { IconButton } from '@mui/material'
import { Moon, Sun } from '@phosphor-icons/react'

const ModeButtons = () => {

    const toggleMode = useAppStore(state => state.toggleMode)

    return (
        <div className='flex gap-2'>
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
        </div>
    )
}

export default ModeButtons