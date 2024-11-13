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

    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    }

    const getTotal = () => {
        return cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
    }

    const emptyCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    const updateItemQuantity = (itemId, newQuantity) => {
        const updatedCart = cart.map(prod =>
            prod.id === itemId ? { ...prod, quantity: newQuantity } : prod
        );
        setCart(updatedCart);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addItem,
            removeItem,
            getTotal,
            emptyCart,
            getTotalItems,
            updateItemQuantity
        }} >
            {children}
        </CartContext.Provider>
    )
}