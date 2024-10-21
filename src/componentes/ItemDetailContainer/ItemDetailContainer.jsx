import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";


export default function ItemDetailContainer() {

    const [product, setProduct] = useState([]);

    const { id } = useParams();

    useEffect(() => {

        const documentRef = doc(db, "products", id);
        getDoc(documentRef).then((resp) => {
            setProduct({ ...resp.data(), id: resp.id });
        })


    }, []);

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}