import { forwardRef} from 'react'
import { Box, Chip, MenuItem, InputAdornment, TextField } from '@mui/material';
import '../../index.css'
import useAppStore from '../../store/store';


const chipBoxStyles = { display: 'flex', flexWrap: 'wrap', gap: 0.5 }

const SelectChip = ({ name, label, size, options, icon, iconSize, iconClass, errorMessage,optionValue = 'id',minWidth,maxWidth, ...props },ref) => {

    const mode = useAppStore(state => state.mode)
    //const mode = props.mode ? props.mode : 'light';

    const Icon = icon;

    const color = mode === 'light' ? '#1C1C1C' : '#fff'

    const chipBg = mode === 'light' ? '#1c1c1c' : '#95A4FC'

    const chipColor = mode === 'light' ? '#fff' : '#1c1c1c'

    const styles = {
        minWidth: minWidth ? minWidth : '200px',
        maxWidth: maxWidth ? maxWidth : undefined,
        '& .MuiInputLabel-root': {
            //top: size === 'small' ? '-7px' : '0px',
            color: color,
            '&.Mui-focused, &.MuiFormLabel-filled': {
                top: '0',
                color: color
            }
        },
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
        '& .MuiChip-root': {
            backgroundColor: chipBg,
            '& .MuiChip-label': {
                color: chipColor
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
            },
            '& .MuiChip-root': {
                backgroundColor: 'red',
                '& .MuiChip-label': {
                    color: '#fff'
                }
            },
        }
    }

    return (
        <TextField
            label={label ? label : 'Select input'}
            name={name}
            size={size}
            sx={styles}
            helperText={errorMessage ? errorMessage : undefined}
            select
            SelectProps={{
                multiple: true,
                renderValue: (selected) => (
                    <Box sx={chipBoxStyles}>
                        {selected.map((value) => (
                            <Chip key={value} label={options.find(obj => obj[optionValue] === value).value} />
                        ))}
                    </Box>
                ),
                startAdornment: Icon ? (
                    <InputAdornment position="start">
                        {
                            <Icon size={iconSize ? iconSize : undefined} className={iconClass ? iconClass : undefined} />
                        }
                    </InputAdornment>
                ) : null
            }}
            ref={ref}
            {...props}
        >
            {
                options?.length > 0 ? options.map((option) => (
                    <MenuItem
                        key={option.id}
                        value={option[optionValue]}
                    >
                        {option.value}
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
    );
}

export default forwardRef(SelectChip)