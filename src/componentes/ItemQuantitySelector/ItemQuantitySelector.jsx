import '../ItemDetail/ItemDetail.css'


export default function ItemQuantitySelector({quantity, setQuantity, maxStock }) {

    const handleSubtract = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleAdd = () => {
        if (quantity < maxStock) setQuantity(quantity + 1);
    };

    return (
        <div className='quantity-selector' >
            <button
            onClick={handleSubtract}
            disabled={quantity <=1}
            >-</button>
            <span>{quantity}</span>
            <button
            onClick={handleAdd}
            disabled={quantity >= maxStock}
            >+</button>
        </div>
    )
}