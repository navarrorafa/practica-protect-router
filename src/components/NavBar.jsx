import { NavLink } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';



export const NavBar = () => {
    const { handleLogout } = useLogin()
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to='/'
                        >
                            Home

                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/servicios'
                        >
                            Servicios

                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/contacto'
                        >
                            Contacto

                        </NavLink>
                    </li>

                </ul>

            </nav>
            <button onClick={handleLogout}>Logout </button></>

    )

}