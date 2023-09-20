import React from 'react'
import { useLogin } from '../hooks/useLogin'


export const LoginPage = () => {
  const {handleLogin,state} = useLogin()
  return (
    <div>
   
    <h1>Login </h1>
    <p>{state}</p>
    <button onClick={handleLogin} > Login</button>
    </div>
  )
}
