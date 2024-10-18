import { Link } from "react-router-dom";
import './ItemCard.css'

export default function ({ product }) {
    return (
        <>
            <div className="card">
                <img src={product.image} alt={product.title} />
                <div className="h3-h4">
                    <h3>{product.title}</h3>
                    <h4>${product.price}</h4>
                </div>
                    <p>Categoria: {product.category}</p>
                    <button><Link to={`/item/${product.id}`}>Ver más</Link></button>
            </div>
        </>
    )
}