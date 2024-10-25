import { useContext } from "react";
import './CartWidget.css'
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


export default function CartWidget() {

    const [cart] = useContext(CartContext);

    const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

    return (
        <>
            <div className="carrito">
                <span>{totalItems}</span>
                <Link to={'/cart'}>
                    <img src="./carrito-de-compras.png" alt="carrito" />
                </Link>
            </div>
        </>
    );
}
