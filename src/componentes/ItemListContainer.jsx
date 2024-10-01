import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

export default function ItemListContainer(){

const [products, setProducts] = useState([]);

const{categoryId} = useParams();


useEffect(() => {
    getProducts.then(data => {
        if (categoryId) {
            setProducts(data.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()));
        } else {
            setProducts(data);
        }
    });
}, [categoryId]);

    return(
        <>
        <h1>PRODUCTOS</h1>
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
            {products.map(prod=><ProductCard key={prod.id} product={prod}/>)}
        </div>
        </>
    );
}