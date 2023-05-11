import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers/TimePicker';
import ru from 'dayjs/locale/ru';
import { ruRU } from '@mui/x-date-pickers/locales';
import { forwardRef } from 'react';
import { Timer } from '@phosphor-icons/react';
import { InputAdornment, TextField } from '@mui/material';

const TimePicker = ({ error, errorMessage, ...props }, ref) => {
    // const mode = useAppStore(state => state.mode)
    const mode = props.mode ? props.mode : 'light';

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
                color: color,
                paddingY: (props.size && props.size === 'small') ? '8px' : undefined,
            },
            '& .MuiSvgIcon-root, svg': {
                color: color
            },
        },
        '& .MuiFormLabel-root': {
            color: color,
            '&.Mui-focused': {
                color: color
            },
            '&.Mui-focused, &.MuiFormLabel-filled': {
                top: '0px'
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
        <LocalizationProvider adapterLocale={ru}
            localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText} dateAdapter={AdapterDayjs}>
            <MuiTimePicker
                ampm={false}
                sx={styles}
                inputRef={ref}
                {...props}
                componentsProps={
                    {
                        textField: {
                            error: error,
                            helperText: errorMessage ? errorMessage : undefined,
                            InputProps: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Timer size={24} weight="light" />
                                    </InputAdornment>
                                ),
                            },
                        },
                    }
                }
            />
        </LocalizationProvider>
    )
}

export default forwardRef(TimePicker)