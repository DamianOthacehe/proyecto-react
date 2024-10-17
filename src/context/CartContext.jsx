import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({children}){

    const[cart, setCart]=useState([]);


    //agregar items al cart
    const addItem = (item) => {
        setCart([...cart,item]);
        console.log(cart);
    }

    useEffect(()=>{

    },[]);

    return(
        <CartContext.Provider value={[cart, addItem]} >
            {children}
        </CartContext.Provider>
    )
}