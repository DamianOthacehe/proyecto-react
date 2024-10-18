import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

export default function AddItemButton({ product, quantity }) {

    const [,,addItem] = useContext(CartContext);

    const handleAddToCart = () => {
        addItem({ ...product, quantity });
    }

    return (
        <>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </>
    )
}