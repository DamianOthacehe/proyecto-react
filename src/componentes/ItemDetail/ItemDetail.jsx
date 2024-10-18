import { useState } from 'react'
import AddItemButton from '../AddItemButton/AddItemButton'
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'
import './ItemDetail.css'

export default function ItemDetail({ product }) {

    const [selectedQuantity, setSelectedQuantity] = useState(1)

    return (
        <>
            <h1> Detalles del producto</h1>
            <article>
                <div className="card">
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                </div>
                <div className="texto">
                    <h4>{product.description}</h4>
                    <p>{product.features}</p>
                    <ItemQuantitySelector product={product} quantity={selectedQuantity} setQuantity={setSelectedQuantity} />
                    <AddItemButton product={product} quantity={selectedQuantity} />
                </div>
            </article>
        </>
    )
}