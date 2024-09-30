import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

export default function ItemListContainer(){

const{categoryId} = useParams();

useEffect(()=>{

},[])

const [products, setProducts] = useState([]);

useEffect(()=>{
    getProducts.then(data=>setProducts(data));
},[])

    return(
        <>
        <h1>PRODUCTOS</h1>
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
            {products.map(prod=><ProductCard key={prod.id} product={prod}/>)}
        </div>
        </>
    );
}