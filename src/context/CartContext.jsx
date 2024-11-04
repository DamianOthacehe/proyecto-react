import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({ children }) {

    const newCart = JSON.parse(localStorage.getItem("cart")) || [];

    const [cart, setCart] = useState(newCart);

    const addItem = (item) => {
        const isInCart = cart.findIndex(cartItem => cartItem.id === item.id);
        if (isInCart !== -1) {
            const updatedCart = [...cart];
            updatedCart[isInCart].quantity += item.quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, item]);
        }
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={[cart, setCart, addItem]} >
            {children}
        </CartContext.Provider>
    )
}