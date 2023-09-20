import { Route, Routes, Navigate } from 'react-router-dom';
import { ContactoPage, HomePage, LoginPage, ServicioPage } from '../pages';
import React from 'react';
import { useLogin } from '../hooks/useLogin';

export const AppRouter = () => {
  const { state } = useLogin();
   
  // const { state } = useLogin();
  // console.log('entre 9 y 10 ' , state)
  // const [estado, setEstado] = useState(state)
  // useEffect(()=> {
  //    setEstado(state)
  // },[estado]);



  return (
    state === 'no-logeado' ? (
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='/*' element={<Navigate to='/login' />} />
      </Routes>
    ) : (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacto' element={<ContactoPage />} />
        <Route path='/servicios' element={<ServicioPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    )
  );
}
