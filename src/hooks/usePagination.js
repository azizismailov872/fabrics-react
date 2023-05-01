import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";


const usePagination = (pageSize) => {

    let [searchParams, setSearchParams] = useSearchParams();

    const getSearchParams = () => {
        return Object.fromEntries(searchParams) ? Object.fromEntries(searchParams) : {};
    }

    const getCurrentPage = () => {
        return searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    }

    useEffect(() => {
        setSearchParams({
            ...getSearchParams(),
            page: getCurrentPage()
        })
    },[])

    const [page,setPage] = useState(getCurrentPage)

    const changePage = (page) => {
        setSearchParams({
            ...getSearchParams(),    
            page: page
        })

        setPage(page)
    }


    return [page,changePage]
}

export default usePagination