import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

export default function NavBar() {

    return (
        <><nav>
            <Link to={'/'}><img src="./src/assets/logo.jpg" alt="" /></Link>
            <ul>
                <li><Link to={'/category/Avances'}>Avancés</Link></li>
                <li><Link to={'/category/Cocinas'}>Cocinas</Link></li>
                <li><Link to={'/category/Explorers'}>Explorers</Link></li>
            </ul>
            <CartWidget/>
        </nav>
        </>
    );
}