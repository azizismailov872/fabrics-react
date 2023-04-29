export const setErrors = (errors,setErrorFn) => {
    if(errors) {
        for(let error in errors) {
            setErrorFn(error,{
                message: errors[error].message
            })
        }
    }
}