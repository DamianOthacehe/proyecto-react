import { Link } from "react-router-dom";
import './ItemCard.css'

export default function ({ product }) {
    return (
        <div className="card">
            <img className="card-image" src={product.image} alt={product.title} />
            <div className="card-details">
                <h3 className="card-title">{product.title}</h3>
                <h4 className="card-price">${product.price}</h4>
                <p className="card-category">Categoria: {product.category}</p>
            </div>
            <button className="card-button">
                <Link to={`/item/${product.id}`} className="card-link">Ver más</Link>
            </button>
        </div>
    )
}