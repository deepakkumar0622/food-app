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

  const totalAmount = () => {
    let amount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((e) => e._id === item);
        amount += itemInfo.price * cartItems[item];
      }
    }
    return amount;
  };

  const removeFromCart = (itemId) => {
    setCartItems((e) => ({ ...e, [itemId]: e[itemId] - 1 }));
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalAmount,
  };

  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
