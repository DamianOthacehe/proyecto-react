import { useState } from "react"

export default function MiCarrito({numero}){

    const[contador, setContador] = useState(numero)

    const clickCarrito = () => {
        setContador(contador+1)
    }

    return(
        <>
        <button className="carrito" onClick={clickCarrito}><img src="./src/assets/carrito-de-compras.png" alt="" /></button>
        <p>{contador}</p>
        </>
    )
}