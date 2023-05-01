import axios from "axios";
import { isEmpty } from "lodash";

const instance = axios.create({
    baseURL: 'http://localhost:8876',
    withCredentials: true,
    headers: {
        'Accept': 'application/json'
    }
})


export const FabricsService = {
    getFabricsList: async(searchParams,sortModel) => {
        const baseUrl = !isEmpty(searchParams) ? `/api/fabrics/filtered?${searchParams}&` : `/api/fabrics${sortModel ? '?' : ''}`

        if(sortModel) {
            const response = await instance.get(`${baseUrl}sortBy=${sortModel.sortBy}&sort=${sortModel.sort}`)

            return response
        }

        const response = await instance.get(baseUrl)

        return response
    }
}