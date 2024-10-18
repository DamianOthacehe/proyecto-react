
export default function ItemQuantitySelector({ product, quantity, setQuantity }) {

    const handleSubtract = () => {
        quantity > 1 && setQuantity(quantity - 1);
    }

    const handleAdd = () => {
        quantity < product.stock && setQuantity(quantity + 1);
    }

    return (
        <>
            <button onClick={handleSubtract}>-</button>
            <span>{quantity}</span>
            <button onClick={handleAdd}>+</button>
        </>
    )
}