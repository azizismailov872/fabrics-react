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
    getFabric: async(id) => {
        return instance.get(`/api/fabrics/${id}`);
    },
    getFabricsList: async(searchParams,sortModel) => {
        const baseUrl = !isEmpty(searchParams) ? `/api/fabrics?${searchParams}&` : `/api/fabrics${sortModel ? '?' : ''}`

        if(sortModel?.sortBy && sortModel?.sort) {
            const response = await instance.get(`${baseUrl}sortBy=${sortModel.sortBy}&sort=${sortModel.sort}`)

            return response
        }

        const response = await instance.get(baseUrl)

        return response
    },
    create: async(data) => {
        await instance.get('/sanctum/csrf-cookie');
        return instance.post('/api/fabrics/create',data)
    },
    update: async({id,data}) => {
        await instance.get('/sanctum/csrf-cookie');
        return instance.post(`/api/fabrics/update/${id}`,data)
    },
    deleteFabrics: async(ids) => {
        await instance.get('/sanctum/csrf-cookie');
        return instance.post('/api/fabrics/delete',{
            ids: ids
        })
    }
}
