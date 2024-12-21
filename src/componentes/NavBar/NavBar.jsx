import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import { useState } from "react";

export default function NavBar() {

    const [dropdownVisible, setDropdownVisible] = useState(false);

    return (
        <nav className="navbar">
            <Link to={'/'} ><img src="./logo.png" alt="" /></Link>
            <ul>
                <li onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)}>
                    <NavLink to={'/products'} activeclassname="active" className="navbar-link">Productos</NavLink>
                    {dropdownVisible && (
                        <ul className="dropdown-menu">
                            <li><NavLink to={'/category/Avances'} activeclassname="active" className="navbar-link">Avancés</NavLink></li>
                            <li><NavLink to={'/category/Cocinas'} activeclassname="active" className="navbar-link">Cocinas</NavLink></li>
                            <li><NavLink to={'/category/Explorers'} activeclassname="active" className="navbar-link">Explorers</NavLink></li>
                        </ul>
                    )}
                </li>
                <li><NavLink to={'/distributors'} activeclassname="active" className="navbar-link">Distribuidores</NavLink></li>
                <li><NavLink to={'/manuals'} activeclassname="active" className="navbar-link">Manuales</NavLink></li>
                <li><NavLink to={'/faq'} activeclassname="active" className="navbar-link">Preguntas Frecuentes</NavLink></li>
                <li><NavLink to={'/login'} activeclassname="active" className="navbar-link">Ingresar</NavLink></li>
            </ul>
            <CartWidget />
        </nav>
    );
}