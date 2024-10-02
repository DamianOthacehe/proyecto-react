import { useEffect, useState } from "react";
import { getCategory, getProducts } from "../../asyncMock";
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'

export default function ItemListContainer(){

const [products, setProducts] = useState([]);

const{categoryId} = useParams();
console.log(categoryId);

useEffect(() => {
    if (categoryId) {
    const filteredProducts = getCategory(categoryId);
    setProducts(filteredProducts);
    } else {
        getProducts.then((data) => setProducts(data));
    }
}, [categoryId]);


    return(
        <>
        <h1>PRODUCTOS</h1>
        <div className="productos">
            {products.map(prod=><ProductCard key={prod.id} product={prod}/>)}
        </div>
        </>
    );
}