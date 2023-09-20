
import { useReducer } from 'react'
import { NavBar } from './components/NavBar'
import { LoginPage } from './pages/LoginPage'
import { AppRouter } from './routers/AppRouter'
import { ProtectReducer } from './reducer/ProtectReducer'


function App() {


  return (

    <>

     <AppRouter/>
    </>
  )
}

export default App
