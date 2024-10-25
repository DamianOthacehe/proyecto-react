import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import '../itemDetail/itemDetail.css'

export default function AddItemButton({ product, quantity }) {

    const [, , addItem] = useContext(CartContext);

    const handleAddToCart = () => {
        addItem({ ...product, quantity });
    }

    return (
        <>
            <button className='add-item' onClick={handleAddToCart}>Agregar al carrito</button>
        </>
    )
}