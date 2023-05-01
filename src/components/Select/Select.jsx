import { InputAdornment, MenuItem, TextField } from '@mui/material';
import {forwardRef} from 'react'
import useAppStore from '../../store/store';


const Select = ({ name, label, size, options,optionValue = 'value', icon, iconSize, iconClass, errorMessage,multiple,minWidth,maxWidth, ...props },ref) => {

    const mode = useAppStore(state => state.mode)
    //const mode = props.mode ? props.mode : 'light';

    const Icon = icon;

    const color = mode === 'light' ? '#1C1C1C' : '#fff'

    const styles = {
        minWidth: props.minWidth ? props.minWidth : '200px',
        maxWidth: props.maxWidth ? props.maxWidth : undefined,
        '& .MuiInputLabel-root': {
            //top: size === 'small' ? '-7px' : '0px',
            color: color,
            '&.Mui-focused, &.MuiFormLabel-filled': {
                top: '0',
                color: color
            }
        },
        '& .MuiOutlinedInput-root': {
            color: color,
            '& fieldset': {
                borderColor: color
            },
            '&:hover fieldset': {
                borderColor: color
            },
            '&.Mui-focused fieldset': {
                borderColor: color
            },
            '& input': {
                color: color
            },
            '& .MuiSvgIcon-root, svg': {
                color: color
            }
        },
        '& .Mui-error': {
            color: 'red',
            '&.MuiFormLabel-root': {
                color: 'red'
            },
            '& .MuiInputAdornment-root svg': {
                color: 'red'
            },
            '&.MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'red'
                },
                '&:hover fieldset': {
                    borderColor: 'red'
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'red'
                },
                '& input': {
                    color: 'red'
                },
                '& .MuiSvgIcon-root, svg': {
                    color: 'red'
                }
            },
        }
    }

    return (
        <TextField
            label={label ? label : 'Select input'}
            size={size}
            sx={styles}
            helperText={errorMessage ? errorMessage : undefined}
            select
            ref={ref}
            SelectProps={{
                multiple: multiple,
                startAdornment: Icon ? (
                    <InputAdornment position="start">
                        {
                            <Icon size={iconSize ? iconSize : undefined} className={iconClass ? iconClass : undefined} />
                        }
                    </InputAdornment>
                ) : null
            }}
            {...props}
        >
            {
                options?.length > 0 ? options.map((option) => (
                    <MenuItem
                        key={option.id ? option.id : option.value}
                        value={option[optionValue]}
                    >
                        {option.label ? option.label : option.value}
                    </MenuItem>
                )) :
                    <MenuItem
                        key={0}
                        value={null}
                        disabled
                    >
                        Нет параметров
                    </MenuItem>
            }
        </TextField>
    )
}

export default forwardRef(Select)