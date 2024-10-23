import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

export default function NavBar() {

    return (
        <><nav>
            <Link to={'/'}><img src="./public/logo.jpg" alt="" /></Link>
            <ul>
                <li><NavLink to={'/category/Avances'}>Avancés</NavLink></li>
                <li><NavLink to={'/category/Cocinas'}>Cocinas</NavLink></li>
                <li><NavLink to={'/category/Explorers'}>Explorers</NavLink></li>
            </ul>
            <CartWidget />
        </nav>
        </>
    );
}