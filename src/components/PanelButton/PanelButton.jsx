import { IconButton, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'

const activeStyles = {
    backgroundColor: 'rgba(0,0,0,0.3)',
    '&:hover' : {
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
}

const PanelButton = ({title,children,toggable = true,active,onClose = false,onClickFn}) => {
    
    const getInitialActiveValue = () => {
        return active ? active : false
    }
    
    const [isActive,setActive] = useState(getInitialActiveValue)
    
    useEffect(() => {
        onClose && setActive(false)
    },[onClose])

    const onClick = () => {
        toggable && setActive(prev => !prev)
        onClickFn && onClickFn()
    }

    return (
        <Tooltip sx={(toggable && isActive) ? activeStyles : {}} onClick={onClick} title={title}>
            <IconButton>
                {
                    children
                }
            </IconButton>
        </Tooltip>
    )
}

export default PanelButton