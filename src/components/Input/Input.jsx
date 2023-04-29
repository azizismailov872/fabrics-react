import { InputAdornment, TextField } from '@mui/material'
import '../../index.css'
import useAppStore from '../../store/store';


const Input = ({icon,iconSize = 20,iconClass,register,minWidth,maxWidth,errorMessage,...props}) => {

    const Icon = icon;

    const mode = useAppStore(state => state.mode)
    //const mode = props.mode ? props.mode : 'light';

    const color = mode === 'light' ? '#1C1C1C' : '#fff'

    const styles = {
        '& .MuiOutlinedInput-root': {
            minWidth: minWidth ? minWidth : undefined,
            maxWidth: maxWidth ? maxWidth : undefined,
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
            },
        },
        '& .MuiFormLabel-root': {
            color: color,
            '&.Mui-focused': {
                color: color
            }
        },
        '& .Mui-error': {
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
            }
        }
       
    }

    return (
        <TextField
            {...props}
            sx={styles}
            InputProps={{
                startAdornment: icon ? (
                    <InputAdornment position="start">
                        {
                            Icon ? <Icon size={iconSize} className={iconClass ? iconClass : undefined} /> : undefined
                        }
                    </InputAdornment>
                ) : undefined,
                ...props.InputProps
            }}
            //helperText={props.errorMessage && props.errorMessage} 
            helperText={errorMessage && errorMessage} 
        />
    )
}

export default Input