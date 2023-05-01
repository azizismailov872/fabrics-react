import React from 'react'
import useAppStore from '../../store/store'
import { PulseLoader } from 'react-spinners'

const Loader = () => {

    const mode = useAppStore(state => state.mode)


    return (
        <div className='w-full h-full bg-white-80 dark:bg-primary-darkBlue flex items-center justify-center'>
            <PulseLoader color={mode === 'light' ? '#1c1c1c' : '#95A4FC'} />
        </div>
    )
}

export default Loader