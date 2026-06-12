<<<<<<< HEAD
import React, { createContext } from 'react'
import { food_list } from '../assets/assets'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const contextValue = {
        food_list
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
=======
import React, { createContext, useState,useEffect } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (itemId) => {
    if(!cartItems[itemId]){
      setCartItems((prev) => [...prev, itemId]);
    }
    else{
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }
    
  }


  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));}

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
>>>>>>> 2f229fb84788f22f8d4d9adbdce123e7df7dc90d
