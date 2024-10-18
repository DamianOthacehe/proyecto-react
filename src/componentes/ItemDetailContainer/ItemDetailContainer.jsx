import { useEffect, useState } from "react"
import { getProductId } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer() {

    const [product, setProduct] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        setProduct(getProductId(id));
    }, []);

    return (
        <div>
        <ItemDetail product={product}/>
        </div>
    )
}