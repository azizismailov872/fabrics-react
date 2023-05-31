import { isEmpty } from "lodash";

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

export const getFilterVisibleValue = (searchParams) => {
    const params = Object.fromEntries(searchParams);
    const { page, ...filterParams } = params
    return !isEmpty(filterParams) ? true : false
}

export const getShowResetSortValue = (sortModel, defaultSortModel) => {
    return JSON.stringify(sortModel) !== JSON.stringify(defaultSortModel) ? true : false
}