import { useState } from "react";


export default function CartWidget({ numero }) {

    const [contador, setContador] = useState(numero)

    const clickCarrito = () => {
        setContador(contador + 1)
    }

    return (
        <>
            <div className="carrito">
                <span>{contador}</span>
                <button onClick={clickCarrito}><img src="./src/assets/carrito-de-compras.png" alt="carrito" /></button>
            </div>
        </>
    );
}