import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cesta.svg'
import {Link} from 'react-router-dom'
//import logo from './icon/logo.png'
import logo1 from './icon/logo-sin-bg.png'
import axios from 'axios'


function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Crear Producto</Link></li>
                <li><Link to="/category">Categorias</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">Historial</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <>
            <header>
                <div className="menu" onClick={() => setMenu(!menu)}>
                    <img src={Menu} alt="" width="30" />
                </div>

                <div className="logo">                
                        <Link to="/"><img src={logo1} alt="logo"/></Link>
                </div>

                <ul style={styleMenu}>
                    <li><Link to="/">{isAdmin ? 'Productos' : 'Tienda'}</Link></li>

                    {isAdmin && adminRouter()}

                    { isLogged ? loggedRouter() : <li><Link to="/login">Login <span> Registrarse</span></Link></li>}

                    <li onClick={() => setMenu(!menu)}>
                        <img src={Close} alt="" width="30" className="menu" />
                    </li>

                </ul>

                {isAdmin ? '':<div className="cart-icon">
                                <span>{cart.length}</span>
                                <Link to="/cart">
                                    <img src={Cart} alt="" width="30" />
                                </Link>
                            </div>}
            
            </header>
            
        </>
        
    )
}

export default Header
