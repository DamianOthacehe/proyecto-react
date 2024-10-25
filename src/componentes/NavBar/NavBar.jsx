import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

export default function NavBar() {

    return (
        <nav className="navbar">
            <Link to={'/'} ><img src="./logo.jpg" alt="" /></Link>
            <ul>
                <li><NavLink to={'/category/Avances'} activeclassname="active" className="navbar-link">Avancés</NavLink></li>
                <li><NavLink to={'/category/Cocinas'} activeclassname="active" className="navbar-link">Cocinas</NavLink></li>
                <li><NavLink to={'/category/Explorers'} activeclassname="active" className="navbar-link">Explorers</NavLink></li>
            </ul>
            <CartWidget />
        </nav>
    );
}