import useAppStore from './store/store'
import useSwitchMode from './hooks/useSwitchMode'
import { UserService } from './services/UserService'
import { useQuery } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom'
import App from './App'
import Login from './pages/Login/Login'
import MainLoader from './components/Loaders/Main/MainLoader'
const AppContainer = () => {

    useSwitchMode() 

    const {initialized,auth,setAuth,mode,toggleMode} = useAppStore(state => ({
        initialized: state.initialized,
        auth: state.auth,
        setAuth: state.setAuth,
        mode: state.mode,
        toggleMode: state.toggleMode
    }))

    const {data} = useQuery({
        queryKey: ['auth'],
        queryFn: () => UserService.auth(),
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            data.user ? setAuth(data.auth,data.user) : setAuth(data.auth)
        }
    })


    if(!initialized) {
        return <MainLoader />
    }

    return auth ? (
        <>  
            <Toaster />
            <App />
        </>
    ) : (
        <>  
            <Toaster />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </>
    )
}

export default AppContainer