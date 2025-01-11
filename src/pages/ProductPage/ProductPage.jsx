import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

import { CartContext } from "../../store/CartContext";

import img from "../../assets/p1.jpg";

import style from "./ProductPage.module.css";

export default function ProductPage() {
  const context = useContext(CartContext);
  const params = useParams();
  const id = params.productId;
  const data = context.products.filter((e) => e.product_id === id)[0];

  const [currentStock, setCurrentStock] = useState(data.product_stock); // State for managing stock count
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  const handleAddToCart = () => {
    if (currentStock > 0) {
      context.addItem(id);
      setCurrentStock(currentStock - 1); // Decrease stock count by 1
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
    }
  };

  return (
    <div className={style.container}>
      {showPopup && (
        <div className={style.popupBox}>
          <p>Object is added to cart</p>
        </div>
      )}
      <div className={style.image__container}>
        <img src={data.image ? data.image : img} alt="" />
      </div>
      <div className={style.info__container}>
        <h1>{data.product_name}</h1>
        <p>{data.product_desc}</p>
        <p className={style.stocks}>In Stock: {currentStock}</p>
        <div className={style.tags}>
          {data.tags.map((e) => (
            <span key={e} className={style.tag}>
              {e}
            </span>
          ))}
        </div>
        <div className={style.wrapper}>
          <div className={style.price}>Rs. {data.product_price}</div>
          {currentStock > 0 ? (
            <button onClick={handleAddToCart}>
              Add To Cart <IoCartOutline />
            </button>
          ) : (
            <button disabled className={style.outOfStockButton}>
              Item Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
