import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import style from "./HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.bg}></div>
      <div className={style.content}>
        <h1>Pallavi's Store</h1>
        <span>Unleash Your Style – Discover Fashion That Defines You!</span>
        <p>
          Discover the latest in fashion with Pallavi’s Store, where style meets
          comfort. We offer a wide range of clothing that blends contemporary
          trends with timeless classics, ensuring that you always look your
          best, no matter the occasion.
        </p>

        <button
          className={style.all_products__btn}
          onClick={() => navigate("/products")}
        >
          Go To Our Products
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}
