import { useReducer } from 'react'
import { ProtectReducer } from '../reducer/ProtectReducer'

export const useLogin = () => {
    const [state, dispatch] = useReducer(ProtectReducer, 'no-logeado')

    const handleLogin = () => {
        
        dispatch(
            {
                type: "[AUTH] logeado",
                payload : "logeado"
            })
          
    }

    const handleLogout = () => {
        dispatch({ 
            type: "[AUTH] no-logeado",
                payload : "no-logeado"
         })
    }
    return {
        state,
        handleLogin,
        handleLogout
    }
}
