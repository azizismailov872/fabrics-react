import { useQuery, useQueryClient } from "@tanstack/react-query"
import { UserService } from "../services/UserService"
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const queryClient = useQueryClient()

    const navigate = useNavigate()
    
    const logout = async() => {
        const loadingToast = toast.loading('Выполняю выход из приложения...');
        const response = await UserService.logout()
        if(response) {
            toast.success('Вы больше не авторизированы', {
                id: loadingToast,
            });
            queryClient.invalidateQueries('auth')
            navigate('/login')
        }   
        else {
            toast.error('Возникла ошибка',{
                id: loadingToast
            });
        }
    }

    return logout
}

export default useLogout