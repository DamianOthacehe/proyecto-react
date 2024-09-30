import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";
import ProductCard from "./ProductCard";

export default function ItemListContainer(){

const [products, setProducts] = useState([]);

useEffect(()=>{
    getProducts.then(data=>setProducts(data));
},[])

    return(
        <>
        <h1>PRODUCTOS</h1>
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
            {products.map(product=><ProductCard key={product.id} product={product}/>)}
        </div>
        </>
    );
}