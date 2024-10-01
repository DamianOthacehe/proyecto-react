import { Link } from "react-router-dom";

export default function ({product}){
    return(
        <>
        <div style={{border:"1px solid white", padding: 10}}>
        <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <p>Categoria: {product.category}</p>
            <button><Link to={`/item/${product.id}`}>Ver más</Link></button>
        </div>
        </>
    )
}