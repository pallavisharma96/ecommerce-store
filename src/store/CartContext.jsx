import { createContext, useEffect, useState } from "react";

import products_ from "../assets/DummyData";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  buyNow: () => {},
  isLogin : false,
  products : products_,
  login : () => {},
  logOut : () => {}
});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState(products_)
  const [isLogin, setIsLogin] = useState(false)

  const addItem = (id) => {
    setCart((prev) => {
      const copy = { ...prev, [id]: prev[id] ? prev[id] + 1 : 1 };
      localStorage.setItem("cart", JSON.stringify(copy));
      return copy;
    });
  };
  const removeItem = (id) => {
    setCart((prev) => {
      let copy = { ...prev };
      copy = { ...copy, [id]: copy[id] - 1 };
      if (copy[id] === 0) {
        delete copy[id];
      }
      localStorage.setItem("cart", JSON.stringify(copy));

      return copy;
    });
  };

  const buyNow = () => {
    const newProducts = products.map( (data) => {
      const stockUsed = cart[data.product_id]
      if (!!stockUsed){
        return {
          ...data,
          product_stock : data.product_stock - stockUsed
        }
      }
      return data;
    })
    setProducts(newProducts);
    setCart({});
    localStorage.setItem("cart", JSON.stringify({}));
    alert("Order Confirm")
  };

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    setCart(!!localCart ? JSON.parse(localCart) : []);
    const isLoginLocal = localStorage.getItem("isLogin")
    setIsLogin(!!isLoginLocal ? JSON.parse(isLoginLocal) : false)
  }, []);

  const login = () => {
    setIsLogin(true);
  }
  const logOut = () => {
    setIsLogin(false);
  }

  const value = {
    cart,
    addItem,
    removeItem,
    buyNow,
    isLogin,
    products,
    login,
    logOut
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
