import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import { CartContext } from "../store/CartContext";

export default function Base() {
  const context = useContext(CartContext);
  const navigate = useNavigate();

  useEffect( () => {
    if (!context.isLogin){
      navigate("/auth")
    }
  })
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
