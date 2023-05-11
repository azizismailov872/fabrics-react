import { ClipLoader } from 'react-spinners'

const Button = ({type,isLoading,secondary = false,warning = false,minWidth,className,size = 'normal',...props}) => {

    // const mode = useAppStore(state => state.mode)
    const mode = props.mode ? props.mode : 'light';

    const primaryStyles = 'bg-black-100 text-primary-light dark:bg-secondary-purple-dark dark:text-black-100 '

    const secondaryStyles = 'bg-black-40 text-black-100 dark:text-primary-light'

    const warningStyles = 'bg-red-600 text-primary-light'

    const base = `${size === 'small' ? 'px-2 py-1' : 'px-4 py-2'} rounded-md font-medium flex items-center justify-center gap-2`

    return (
        <button 
            className={className ? className : `${warning ? warningStyles : secondary ? secondaryStyles : primaryStyles} ${base}`}  
            type={type} 
            {...props}
            style={minWidth ? {
                minWidth: minWidth
            } : undefined}
        >
             {
                    isLoading && <ClipLoader 
                            color={mode === 'light' ? '#fff' : '#1c1c1c'}
                            size={18}
                    /> 
                }
                {props.children}
        </button>
    )
}

export default Button