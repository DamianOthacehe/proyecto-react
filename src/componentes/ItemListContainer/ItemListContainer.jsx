import { useEffect, useState } from "react";
import { getCategory, getProducts } from "../../asyncMock";
import ItemCard from "../ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'

export default function ItemListContainer(){

const [products, setProducts] = useState([]);
const [title, setTitle] = useState()

const{categoryId} = useParams();

useEffect(() => {
    if (categoryId) {
    const filteredProducts = getCategory(categoryId);
    setProducts(filteredProducts);
    setTitle(categoryId);
    } else {
        getProducts.then((data) => setProducts(data));
        setTitle("Productos")
    }
}, [categoryId]);


    return(
        <>
        <h1>{title}</h1>
        <div className="productos">
            {products.map(prod=><ItemCard key={prod.id} product={prod}/>)}
        </div>
        </>
    );
}