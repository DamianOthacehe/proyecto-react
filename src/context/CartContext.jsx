import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

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
        console.log(cart);
    }, [cart]);

    return (
        <CartContext.Provider value={[cart, setCart, addItem]} >
            {children}
        </CartContext.Provider>
    )
}