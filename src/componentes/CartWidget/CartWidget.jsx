import { useContext } from "react";
import './CartWidget.css'
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


export default function CartWidget() {

    const [cart] = useContext(CartContext);
    const handleCartClick = (e) => cart.length === 0 && (e.preventDefault(), alert("El carrito esta vacio"));

    return (
        <>
            <div className="carrito">
                <span>{cart.length}</span>
                <Link to={'/cart'} onClick={handleCartClick}><img src="./public/carrito-de-compras.png" alt="carrito" /></Link>
            </div>
        </>
    );
}
