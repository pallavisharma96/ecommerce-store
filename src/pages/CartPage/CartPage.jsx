import React, { useContext, useState } from "react";

import PaymentWindow from "../../components/PaymentWindow";
import { CartContext } from "../../store/CartContext";

import style from "./CartPage.module.css";
import DummyData from "../../assets/DummyData";

export default function CartPage() {
  const context = useContext(CartContext);
  const [isPaymentWindowOpen, setIsPaymentWindowOpen] = useState(false);
  const data = Object.entries(context.cart).map((e) => {
    const id = e[0];
    const product = DummyData.filter((element) => element.product_id === id)[0];
    product["quantity"] = e[1];
    return product;
  });

  const total = data.reduce(
    (prev, curr) => prev + curr.product_price * curr.quantity,
    0
  );
  return (
    <>
      <h1 className={style.title}>My Cart</h1>

      <div className={style.container}>
        <div className={style.cart__items}>
          {data.length !== 0 ? (
            data.map((e) => {
              return (
                <div className={style.cart__item} key={e.product_id}>
                  <div className={style.info}>
                    <h2>{e.product_name}</h2>
                    <span>Rs {e.product_price}</span>
                  </div>
                  <div className={style.quantity}>
                    <button onClick={() => context.removeItem(e.product_id)}>
                      -
                    </button>
                    <span>{e.quantity}</span>
                    <button onClick={() => context.addItem(e.product_id)}>
                      +
                    </button>
                  </div>
                  <span className={style.amount}>
                    Rs {e.product_price * e.quantity}
                  </span>
                </div>
              );
            })
          ) : (
            <p>Add items to your Cart</p>
          )}
        </div>
        <div className={style.checkout__container}>
          <h1>Total : Rs. {total}</h1>
          <button
            className={style.buy__btn}
            disabled={total === 0}
            onClick={() => {
              setIsPaymentWindowOpen(true);
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
      {isPaymentWindowOpen && (
        <PaymentWindow
          total={total}
          buy={context.buyNow}
          close={() => setIsPaymentWindowOpen(false)}
        />
      )}
    </>
  );
}
