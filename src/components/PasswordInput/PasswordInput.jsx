import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Eye, EyeSlash, Lock } from '@phosphor-icons/react'
import { useState } from 'react'
import useAppStore from '../../store/store';

const PasswordInput = ({ iconSize, iconClass,errorMessage, ...props}) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const mode = useAppStore(state => state.mode)
    //const mode = props.mode ? props.mode : 'light';

    const color = mode === 'light' ? '#1C1C1C' : '#fff'

    const styles = {
        '& .MuiOutlinedInput-root': {
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
            sx={styles}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Lock size={iconSize ? iconSize : 24} weight="regular" className={iconClass ? iconClass : undefined} />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <EyeSlash size={iconSize ? iconSize : 24} weight="light" /> : <Eye size={iconSize ? iconSize : 24} weight="light" />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
            //helperText={props.errorMessage && props.errorMessage}
            helperText={errorMessage && errorMessage}
            {...props}
        />
    )
}

export default PasswordInput