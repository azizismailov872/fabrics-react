import { FormControlLabel, FormGroup, Switch as MuiSwitch } from '@mui/material'
import { forwardRef } from 'react'

const Switch = ({ name, value, onChange, onBlur, label,...props }, ref) => {

    // const mode = useAppStore(state => state.mode)
    const mode = props.mode ? props.mode : 'light';

    const styles = {
        '& .MuiSwitch-root': {
            paddingY: '9px',
            width: '70px'
        },
        '& .MuiFormControlLabel-root': {
            color: mode === 'light' ? '#1c1c1c' : '#fff'
        },
        '& .MuiSwitch-switchBase': {
            //paddingX: '7.5px',
            paddingX: '14px',
            paddingTop: '10px',
            '&.Mui-checked': {
                paddingX: '19px'
            },
            '&.Mui-checked + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: mode === 'light' ? '#000' : '#95A4FC',
            },
            '& + .MuiSwitch-track': {
                paddingY: '5px'
            },
            '& .MuiSwitch-thumb':{
                width: '17px',
                height: '17px',
                color: mode === 'light' ? '#fff' : '#000'
            }
        }
    }

    return(
         <FormGroup sx = { styles } >
                <FormControlLabel control={<MuiSwitch onBlur={onBlur}
                    onChange={onChange}
                    checked={value}
                    name={name}
                    inputRef={ref} />} label={label} />
        </FormGroup >
    )
}

export default forwardRef(Switch)