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
    getFabricsList: async(searchParams) => {
        const baseUrl = !isEmpty(searchParams) ? `/api/fabrics/filtered?${searchParams}&` : '/api/fabrics'

        const response = await instance.get(baseUrl)

        return response
    }
}