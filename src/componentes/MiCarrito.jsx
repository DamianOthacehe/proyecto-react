import { useState } from "react"

export default function MiCarrito({numero}){

    const[contador, setContador] = useState(numero)

    const clickCarrito = () => {
        setContador(contador+1)
    }

    return(
        <>
        <div className="carrito">
            <p>{contador}</p>
            <button onClick={clickCarrito}><img src="./src/assets/carrito-de-compras-1.png" alt="carrito" width={"50px"} /></button>
        </div>
        </>
    )
}