import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8876',
    withCredentials: true,
    headers: {
        'Accept': 'application/json'
    }
})


export const UserService = {
    login: async(loginData) => {
        await instance.get('/sanctum/csrf-cookie');
        try {
            const response = await instance.post('/login',loginData)

            return response
        }catch(error) {
            return error
        }
    },
    auth: async() => {
        try{
            const response = await instance.get('/api/auth')

            return response.data;
        }catch(error){
            console.log('error: ',error)
        }
    },
    logout: async() => {
        try {
            const response = await instance.post('/logout');
            
            return response?.status === 204 ? true : false
        }catch(error) {
            console.log('logout error: ',error)
        }
    }
    
}