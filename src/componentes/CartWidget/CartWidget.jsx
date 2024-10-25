import { useContext } from "react";
import './CartWidget.css'
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


export default function CartWidget() {

    const [cart] = useContext(CartContext);
    const handleCartClick = (e) => cart.length === 0 && (
        e.preventDefault(), Swal.fire({
            title: "El carrito esta vacio",
            text: "Agrega tus productos para acceder"
        }
    ));

    return (
        <>
            <div className="carrito">
                <span>{cart.length}</span>
                <Link to={'/cart'} onClick={handleCartClick}><img src="./carrito-de-compras.png" alt="carrito" /></Link>
            </div>
        </>
    );
}
