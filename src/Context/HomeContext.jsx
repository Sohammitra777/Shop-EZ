import React, { createContext, useState } from "react";
import all_products from "../components/Assets/all_products";

export const HomeContext= createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for (let index=0; index<all_products.length+1; index++){
        cart[index]=0;
    }
    return cart
}

const HomeContextProvider=(props)=>{
    const [cartItems,setcartItems]= useState(getDefaultCart());
    
    const addToCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    
    const removeFromCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue={all_products,cartItems,addToCart,removeFromCart};
    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider