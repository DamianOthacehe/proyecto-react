import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { FadeLoader } from "react-spinners";
import '../../app.css'


export default function ItemDetailContainer() {

    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        const documentRef = doc(db, "products", id);
        getDoc(documentRef).then((resp) => {
            setProduct({ ...resp.data(), id: resp.id });
        })


    }, []);

    return (
        <div>
            {isLoading ? (<div className="loader">
                <FadeLoader
                    color={"#4772a9"}
                    loading={true}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>) : <ItemDetail product={product} />}
        </div>
    )
}