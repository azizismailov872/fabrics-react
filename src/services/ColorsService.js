import axios from "axios";
import { isEmpty } from "lodash";

const instance = axios.create({
    baseURL: 'http://localhost:8876',
    withCredentials: true,
    headers: {
        'Accept': 'application/json'
    }
})


export const ColorsService = {
    getColor: async(id) => {
        return instance.get(`/api/colors/${id}`);
    },
    getColors: async (sortModel = {}) => {
        let baseUrl = '/api/colors'

        if(sortModel?.sortBy && sortModel?.sort)
        {
            baseUrl = `/api/colors?sortBy=${sortModel.sortBy}&sort=${sortModel.sort}`
        }

        const response = await instance.get(baseUrl)

        return response
    },
    getColorsList: async () => {
        return instance.get('/api/colors/list')
    },
    create: async (data) => {
        await instance.get('/sanctum/csrf-cookie');
        return instance.post('/api/colors/create', data);
    },
    update: async ({ id, data }) => {
        await instance.get('/sanctum/csrf-cookie');
        return instance.post(`/api/colors/update/${id}`, data)
    },
    delete: async (ids) => {
        await instance.get('/sanctum/csrf-cookie');
        return instance.post('/api/colors/delete', {
            ids: ids
        })
    },
    deleteOne: async (id) => {
        return instance.get(`/api/colors/delete/${id}`)
    }
}
