import { useEffect, useState } from "react"
import { getProductId } from "../../asyncMock";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'


export default function ItemDetailContainer() {

    const [product, setProduct] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        setProduct(getProductId(id));
    }, []);

    return (
        <>
            <h1> Detalles del producto</h1>
            <article>
                <div className="card">
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <button>Agregar al carrito</button>
                </div>
                <div className="texto">
                    <h4>{product.description}</h4>
                    <p>{product.features}</p>
                </div>
            </article>
        </>
    )
}