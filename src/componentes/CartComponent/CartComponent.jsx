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
            {cart.length === 0 ? (
                <>
                    <h1>El carrito esta vacio 😢</h1>
                    <button><Link to={"/"} className="button-link">Ver productos</Link></button>
                </>
            ) : (
                <>
                    <h1>Bienvenido a tu carrito</h1>
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
                    <h2 className="cart-total">Total carrito ${total()}</h2>
                    <div className="cart-buttons">
                        <button onClick={handleEmpty}>Vaciar carrito</button>
                        <button><Link to={`/Checkout`} className="button-link">Comprar</Link></button>
                    </div>
                </>
            )}
        </div>
    )
}