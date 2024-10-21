import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export default function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState()

    const { categoryId } = useParams();

    useEffect(() => {

        const documentsRef = collection(db, "products");

        if (categoryId) {
            const queryCategory = query(documentsRef, where("category", "==", categoryId));
            getDocs(queryCategory).then((resp) => {
                setProducts(resp.docs.map((doc) => {
                    return {
                        ...doc.data(), id: doc.id
                    }
                }));
                setTitle(categoryId);
            }).catch((error) => {
                console.error("productos no encontrados", error);
            });
        } else {
            getDocs(documentsRef).then((resp) => {
                setProducts(resp.docs.map((doc) => {
                    return {
                        ...doc.data(), id: doc.id
                    }
                }));
                setTitle("Productos");
            }).catch((error) => {
                console.error("productos no encontrados", error);
            });
        }
    }, [categoryId]);


    return (
        <>
            <h1>{title}</h1>
            <div className="productos">
                {products.map(prod => <ItemCard key={prod.id} product={prod} />)}
            </div>
        </>
    );
}