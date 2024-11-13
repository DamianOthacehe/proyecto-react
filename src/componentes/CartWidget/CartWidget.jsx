import { useContext } from "react";
import './CartWidget.css'
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


export default function CartWidget() {

    const {getTotalItems} = useContext(CartContext);

    return (
        <>
            <div className="carrito">
                <span>{getTotalItems()}</span>
                <Link to={'/cart'}>
                    <img src="./carrito-de-compras.png" alt="carrito" />
                </Link>
            </div>
        </>
    );
}
