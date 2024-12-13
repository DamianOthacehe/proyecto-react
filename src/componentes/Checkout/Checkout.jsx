import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import './Checkout.css'


export default function Form() {

    const [orderId, setOrderId] = useState("");
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const { cart, setCart } = useContext(CartContext);

    const email = watch("email");

    const send = async (data) => {

        if (data.email !== data.confirmEmail) {
            return;
        }
        const order = {
            date: new Date(),
            buyer: data,
            items: cart
        }
        setCart([]);

        const orderRef = collection(db, "orders");
        const docRef = await addDoc(orderRef, order);
        setOrderId(docRef.id);

        await updateStock(cart);
    }

    const updateStock = async (cart) => {
        for (const item of cart) {
            const itemRef = doc(db, "products", item.id);
            await updateDoc(itemRef, {
                stock: item.stock - item.quantity
            });
        }
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
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Nombre"
                        className={errors.nombre ? 'error' : ''}
                        {...register("nombre", {
                            required: "El nombre es obligatorio",
                            minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" },
                            maxLength: { value: 50, message: "El nombre no puede tener más de 50 caracteres" },
                            pattern: {
                                value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/,
                                message: "El nombre solo puede contener letras"
                            }
                        })}
                    />
                    {errors.nombre && <p className="error-message">{errors.nombre.message}</p>}

                    <label htmlFor="telefono">Ingresa tu telefono</label>
                    <input
                        type="number"
                        id="telefono"
                        placeholder="Telefono"
                        className={errors.telefono ? 'error' : ''}
                        {...register("telefono")
                        }
                    />

                    <label htmlFor="email">Ingresa tu e-mail *</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="e-mail"
                        className={errors.email ? 'error' : ''}
                        {...register("email", {
                            required: "El email es obligatorio",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "El email no es válido"
                            }
                        })}
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}

                    <label htmlFor="confirmEmail">Confirma tu e-mail *</label>
                    <input
                        type="email"
                        id="confirmEmail"
                        placeholder="e-mail"
                        className={errors.confirmEmail ? 'error' : ''}
                        {...register("confirmEmail", {
                            required: "Confirma tu email",
                            validate: (value) => value === email || "Los emails no coinciden"
                        })}
                    />
                    {errors.confirmEmail && <p className="error-message">{errors.confirmEmail.message}</p>}

                    <button
                        type="submit"
                        disabled={Object.keys(errors).length > 0}
                    >Finalizar compra</button>
                </form>
            </div>
        </div>
    )
}
