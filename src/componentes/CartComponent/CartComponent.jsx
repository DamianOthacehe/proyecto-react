import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";
import './CartComponent.css'


export default function CartComponent() {

    const { cart, setCart, removeItem, emptyCart, getTotal, updateItemQuantity } = useContext(CartContext);

    /*     const total = () => {
            return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
        } */

    const handleQuantityChange = (id, newQuantity) => {
        const updatedCart = cart.map(prod =>
            prod.id === id ? { ...prod, quantity: newQuantity } : prod
        );
        setCart(updatedCart);
    }

    /*     const handleEmpty = () => {
            setCart([]);
        }
     */

    /*     const handleRemove = (id) => {
            const updatedCart = cart.filter(prod => prod.id !== id);
            setCart(updatedCart);
        } */

    return (
        <div className="cart">
            {cart.length === 0 ? (
                <>
                    <h1>El carrito esta vacio 😢</h1>
                    <button className="empty-cart-button">
                        <Link to={"/"} className="button-link">Ver productos</Link>
                    </button>
                </>
            ) : (
                <>
                    <h1>Bienvenido a tu carrito</h1>
                    {
                        cart.map((prod) => (
                            <div key={prod.id} className="cart-item">
                                <img src={prod.image} alt={prod.title} />
                                <h3>{prod.title}</h3>
                                <ItemQuantitySelector
                                    product={prod}
                                    quantity={prod.quantity}
                                    maxStock={prod.stock}
                                    setQuantity={(newQuantity) => updateItemQuantity(prod.id, newQuantity)} />
                                <p>Precio unitario: ${prod.price}</p>
                                <p>Subtotal: ${prod.price * prod.quantity}</p>
                                <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                            </div>
                        ))
                    }
                    <h2 className="cart-total">Total: ${getTotal()}</h2>
                    <div className="cart-buttons">
                        <button onClick={emptyCart}>Vaciar carrito</button>
                        <button><Link to={`/Checkout`} className="button-link">Comprar</Link></button>
                    </div>
                </>
            )}
        </div>
    )
}