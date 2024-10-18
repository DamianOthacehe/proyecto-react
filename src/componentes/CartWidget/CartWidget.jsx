import { useContext } from "react";
import './CartWidget.css'
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


export default function CartWidget() {

    const [cart] = useContext(CartContext);

    return (
        <>
            <div className="carrito">
                <span>{cart.length}</span>
                <Link to={'/cart'}><img src="./src/assets/carrito-de-compras.png" alt="carrito" /></Link>
            </div>
        </>
    );
}
