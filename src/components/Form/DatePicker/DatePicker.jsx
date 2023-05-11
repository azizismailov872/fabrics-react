import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import ru from 'dayjs/locale/ru';
import { ruRU } from '@mui/x-date-pickers/locales';
import { forwardRef } from 'react';

const DatePicker = ({error,errorMessage,...props},ref) => {
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
                paddingY: (props.size && props.size === 'small')  ? '8px' : undefined,
            },
            '& .MuiSvgIcon-root, svg': {
                color: color
            },
        },
        '& .MuiFormLabel-root': {
            color: color,
            top: (props.size && props.size === 'small')  ? '-8px' : '0px',
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
            <MuiDatePicker  
                sx={styles} 
                ref={ref} 
                {...props}  
                componentsProps={{ textField: { error: error, helperText: errorMessage ? errorMessage : undefined } }}
            />
        </LocalizationProvider>
    )
}

export default forwardRef(DatePicker)