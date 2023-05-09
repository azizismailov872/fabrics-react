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
   getColorsList: async() => {
        return instance.get('/api/colors/list')
   },
   create: async(data) => {
        await instance.get('/sanctum/csrf-cookie');
        return instance.post('/api/colors/create',data);
   }
}
