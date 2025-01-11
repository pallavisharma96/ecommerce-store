import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard";
import { CartContext } from "../../store/CartContext";

import style from "./ProductsPage.module.css";

// import products from "../../assets/DummyData";
export default function ProductPage({ search }) {
  const context = useContext(CartContext)
  let products_data = context.products;
  const params = useParams();
  if (search) {
    const query = params["query"];
    products_data = products_data.filter((data) =>
      data.tags.map((e) => e.toLowerCase()).includes(query.toLowerCase())
    );
  }
  return (
    <>
      <h1 className={style.heading}>
        {search ? "Search Result" : "All Products"}
      </h1>
      {products_data.length !== 0 ? (
        <div className={style.products__grid}>
          {products_data.map((data) => (
            <ProductCard
              id={data.product_id}
              title={data.product_name}
              price={data.product_price}
              key={data.product_id}
              img={data.image}
            />
          ))}
        </div>
      ) : (
        <p className={style.info}>No Result Found</p>
      )}
    </>
  );
}
