import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {

    return (
        <><nav>
            <Link to={'/'}><img src="./src/assets/logo.jpg" alt="" /></Link>
            <ul>
                <li><Link to={'/category/avances'}>Avancés</Link></li>
                <li><Link to={'/category/cocinas'}>Cocinas</Link></li>
                <li><Link to={'/category/explorers'}>Explorers</Link></li>
            </ul>
            <CartWidget numero={0}/>
        </nav>
        </>
    );
}