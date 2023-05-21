import { isEmpty, pick, pickBy, unset } from "lodash";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import {yupResolver} from '@hookform/resolvers/yup'
import { filterSchema } from "../validation/fabrics";


const useFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const {register,control,handleSubmit,reset: resetAll,watch,resetField,setValue, formState: {errors}} = useForm({
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


    const onSubmit = (formData) => {
        const quantityFrom = watch('quantity_from')

        const quantityTo = watch('quantity_to')

        const weightFrom = watch('weight_from')

        const weightTo = watch('weight_to')

        if(!isEmpty(quantityFrom) || !isEmpty(quantityTo)) {
            resetField('quantity')
            unset(formData,'quantity')
        }

        if(!isEmpty(weightFrom) || !isEmpty(weightTo)) {
            resetField('weight')
            unset(formData,'weight')
        }

        const data = pickBy(formData, value => value !== null && value !== '')

        setSearchParams({
            page: 1,
            ...data,
        })
    }
    
    const reset = () => {
        setSearchParams({})
        resetAll()
    }

    return {register,onSubmit: handleSubmit(onSubmit),reset,watch,searchParams,errors,control}
}

export default useFilter