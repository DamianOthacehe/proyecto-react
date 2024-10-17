import { useState } from "react";
import './CartWidget.css'

export default function CartWidget() {

    const [contador, setContador] = useState()

    return (
        <>
            <div className="carrito">
                <span>{0}</span>
                <button><img src="./src/assets/carrito-de-compras.png" alt="carrito" /></button>
            </div>
        </>
    );
}