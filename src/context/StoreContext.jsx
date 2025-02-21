/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((e) => ({ ...e, [itemId]: 1 }));
    } else {
      setCartItems((e) => ({ ...e, [itemId]: e[itemId] + 1 }));
    }
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const removeFromCart = (itemId) => {
    setCartItems((e) => ({ ...e, [itemId]: e[itemId] - 1 }));
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
