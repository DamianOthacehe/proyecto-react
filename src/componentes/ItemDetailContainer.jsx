import { useEffect, useState } from "react"
import { getProduct } from "../asyncMock";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer(){

const [product, setProduct] = useState([]);

const {id} = useParams();

useEffect(()=>{
setProduct(getProduct(id));
},[]);

    return(
        <>
        <h1> Detalles del producto</h1>
        <div>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title}/>
            <h4>{product.description}</h4>
            <p>{product.features}</p>
            <button>Agregar al carrito</button>
        </div>
        </>
    )
}