export const setErrors = (errors,setErrorFn) => {
    if(errors) {
        for(let error in errors) {
            setErrorFn(error,{
                message: errors[error]?.message ? errors[error]?.message : errors[error][0]
            })
            console.log('errorMessage: ',errors[error])
        }
    }
}