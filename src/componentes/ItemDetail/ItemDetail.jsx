import { useState } from 'react'
import AddItemButton from '../AddItemButton/AddItemButton'
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'
import './ItemDetail.css'

export default function ItemDetail({ product }) {

    const [selectedQuantity, setSelectedQuantity] = useState(1)

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity <= product.stock) {
            setSelectedQuantity(newQuantity)
        }
    }

    return (
        <div className='item-detail'>
            <h1> Detalles del producto</h1>
            <article className='article'>
                <img className="image" src={product.image} alt={product.title} />
                <div className='text-buttons'>
                    <h2 className='title'>{product.title}</h2>
                    <h4 className='description'>{product.description}</h4>
                    <p className='features'>{product.features}</p>
                    <div className='stock-info'>
                        {(product.stock - selectedQuantity) > 3 && (
                            <p>Stock disponible: {product.stock - selectedQuantity} unidades</p>
                        )}
                        {(product.stock - selectedQuantity) <= 3 && (product.stock - selectedQuantity) > 1 && (
                            <p className='low-stock'>¡Últimas {product.stock - selectedQuantity} unidades disponibles!</p>
                        )}
                        {(product.stock - selectedQuantity) === 1 && (
                            <p className='low-stock'>¡Última unidad disponible!</p>
                        )}
                        {(product.stock - selectedQuantity) === 0 && (
                            <p className='low-stock'>¡No hay stock disponible!</p>
                        )}
                    </div>

                    <ItemQuantitySelector
                        quantity={selectedQuantity}
                        setQuantity={handleQuantityChange}
                        maxStock={product.stock}
                    />
                    <AddItemButton
                        product={product}
                        quantity={selectedQuantity}
                        disabled={product.stock === 0 ||(product.stock - selectedQuantity) === 0}
                    />
                </div>
            </article>
        </div>
    )
}