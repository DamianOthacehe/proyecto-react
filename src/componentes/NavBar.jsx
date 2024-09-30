import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {

    return (
        <><nav>
            <Link to={'/'}><img src="./src/assets/logo.jpg" alt="" /></Link>
            <div>
                <button><Link to={'/avances'}>Avancés</Link></button>
                <button><Link to={'/cocinas'}>Cocinas</Link></button>
                <button><Link to={'/explorers'}>Explorers</Link></button>
            </div>
            <CartWidget numero={0}/>
        </nav>
        </>
    );
}