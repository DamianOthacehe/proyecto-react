import '../itemDetail/itemDetail.css'


export default function ItemQuantitySelector({ product, quantity, setQuantity }) {

    const handleSubtract = () => {
        quantity > 1 && setQuantity(quantity - 1);
    }

    const handleAdd = () => {
        quantity < product.stock && setQuantity(quantity + 1);
    }

    return (
        <div className='quantity-selector' >
            <button onClick={handleSubtract}>- 1</button>
            <span>{quantity}</span>
            <button onClick={handleAdd}>+ 1</button>
        </div>
    )
}