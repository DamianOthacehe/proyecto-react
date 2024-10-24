import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom";
import './CartComponent.css'


export default function CartComponent() {

    const [cart, setCart] = useContext(CartContext);

    const total = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }

    const handleEmpty = () => {
        setCart([]);
    }

    return (
        <div className="cart">
            <h1>{cart.length > 0 ? "bienvenido a tu carrito" : "El carrito esta vacio 😢"}</h1>
            {
                cart.map((prod) => (
                    <div key={prod.id} className="cart-item">
                        <h3>{prod.title}</h3>,
                        <p>Cantidad: {prod.quantity}</p>,
                        <p>Precio unitario: ${prod.price}</p>,
                        <p>Subtotal: ${prod.price * prod.quantity}</p>
                    </div>
                ))
            }
            {
                cart.length > 0 &&
                <>
                    <h2 className="cart-total">Total carrito ${total()}</h2>
                    <div className="cart-buttons">
                    <button onClick={handleEmpty}>Vaciar carrito</button>
                    <button><Link to={`/Checkout`} className="button-link">Comprar</Link></button>
                    </div>
                </>
            }
        </div>
    )
}