import axios from "axios";
import { isEmpty } from "lodash";

const instance = axios.create({
    baseURL: 'http://localhost:8876',
    withCredentials: true,
    headers: {
        'Accept': 'application/json'
    }
})


export const MaterialService = {
    getMaterial: async(id) => {
        return instance.get(`/api/materials/${id}`);
    },
    getMaterials: async (sortModel = {}) => {
        let baseUrl = '/api/materials'

        if(sortModel?.sortBy && sortModel?.sort)
        {
            baseUrl = `/api/materials?sortBy=${sortModel.sortBy}&sort=${sortModel.sort}`
        }

        const response = await instance.get(baseUrl)

        return response
    },
    getMatrialsList: async () => {
        return instance.get('/api/materials/list')
    },
    create: async (data) => {
        await instance.get('/sanctum/csrf-cookie');
        return instance.post('/api/materials/create', data);
    },
    update: async({id,data}) => {
        await instance.get('/sanctum/csrf-cookie');
        return instance.post(`/api/materials/update/${id}`,data)
    },
    delete: async(ids) => {
        await instance.get('/sanctum/csrf-cookie');
        return instance.post('/api/materials/delete',{
            ids: ids
        })
    },
    deleteOne: async(id) => {
        return instance.get(`/api/materials/delete/${id}`)
    }
}
