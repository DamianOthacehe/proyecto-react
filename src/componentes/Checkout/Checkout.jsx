import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import './Checkout.css'


export default function Form() {

    const [orderId, setOrderId] = useState("");
    const { register, handleSubmit } = useForm();

    const [cart, setCart] = useContext(CartContext);

    const send = (data) => {
        const order = {
            date: new Date(),
            buyer: data,
            items: cart
        }
        setCart([]);

        const orderRef = collection(db, "orders");
        addDoc(orderRef, order).then((doc) => { setOrderId(doc.id) });
    }

    if (orderId) {
        return (
            <div className="checkout">
                <h1> Gracias por tu compra</h1>
                <p> Tu numero de orden es: <strong>{orderId}</strong></p>
            </div>
        )
    }


    return (
        <div className="checkout">
            <h1>Ingrese sus datos para finalizar la compra</h1>
            <h3>Los campos marcados con un * son obligatorios</h3>

            <div className="formulario">
                <form onSubmit={handleSubmit(send)}>

                    <label htmlFor="nombre">Ingresa tu nombre completo *</label>
                    <input type="text" id="nombre" placeholder="Nombre" required {...register("nombre")} />

                    <label htmlFor="telefono">Ingresa tu telefono</label>
                    <input type="number" id="telefono" placeholder="Telefono" {...register("telefono")} />

                    <label htmlFor="email">Ingresa tu e-mail *</label>
                    <input type="email" id="email" placeholder="e-mail" required />

                    <label htmlFor="email">Confirma tu e-mail *</label>
                    <input type="email" id="email" placeholder="e-mail" {...register("email")} />

                    <button type="submit">Finalizar compra</button>
                </form>
            </div>
        </div>
    )
}
