import { isEmpty, pickBy, unset } from "lodash";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import {yupResolver} from '@hookform/resolvers/yup'
import { filterSchema } from "../validation/fabrics";


const useFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const {register,handleSubmit,reset: resetAll,watch,resetField,setValue, formState: {errors}} = useForm({
        resolver: yupResolver(filterSchema)
    })

    useEffect(() => {
        if(!isEmpty(Object.fromEntries(searchParams))) {
            const searchData = Object.fromEntries(searchParams)
            for(let key in searchData) {
                setValue(key,searchData[key])
            }
        }
    },[])

    const quantityFrom = watch('quantity_from')

    const quantityTo = watch('quantity_to')
    

    const onSubmit = (formData) => {
        if(!isEmpty(quantityFrom) || !isEmpty(quantityTo)) {
            resetField('quantity')
            unset(formData,'quantity')
        }
        const data = pickBy(formData, value => value !== null && value !== '')
        setSearchParams({
            page: 1,
            ...data
        })
    }
    
    const reset = () => {
        setSearchParams({})
        resetAll()
    }

    return {register,onSubmit: handleSubmit(onSubmit),reset,watch,searchParams,errors}
}

export default useFilter