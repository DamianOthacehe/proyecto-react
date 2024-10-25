import { useState } from 'react'
import AddItemButton from '../AddItemButton/AddItemButton'
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'
import './ItemDetail.css'

export default function ItemDetail({ product }) {

    const [selectedQuantity, setSelectedQuantity] = useState(1)

    return (
        <div className='item-detail'>
            <h1> Detalles del producto</h1>
            <article className='article'>
                <img className="image" src={product.image} alt={product.title} />
                <h2 className='title'>{product.title}</h2>
                <h4 className='description'>{product.description}</h4>
                <p className='features'>{product.features}</p>
                <ItemQuantitySelector product={product} quantity={selectedQuantity} setQuantity={setSelectedQuantity} />
                <AddItemButton product={product} quantity={selectedQuantity} />
            </article>
        </div>
    )
}