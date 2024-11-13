import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import '../ItemDetail/ItemDetail.css'

export default function AddItemButton({ product, quantity}) {

    const {addItem} = useContext(CartContext);

    const handleAddToCart = () => {
        addItem({ ...product, quantity });
    }

    return (
        <>
            <button className="add-item" onClick={() => handleAddToCart(product, quantity)}>
                Agregar al carrito
            </button>
        </>
    )
}