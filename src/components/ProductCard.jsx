import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../store/CartContext";

import style from "./ProductCard.module.css";


export default function ProductCard({ id, title, price, img }) {
  const navigate = useNavigate();
  const context = useContext(CartContext);

  const onClickHandler = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div className={style["card"]} onClick={onClickHandler}>
      <div className={style["card__img"]}>
        <img src={img} alt="" />
      </div>
      <div className={style.product__info}>
        <div className={style["card__title"]}>{title}</div>
        <div className={style["card__wrapper"]}>
          <div className={style["card__price"]}>Rs. {price}</div>
          <button
            className={style["cart__button"]}
            onClick={(e) => {
              context.addItem(id);
              e.stopPropagation()
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
