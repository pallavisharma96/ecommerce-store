import React from "react";

import style from "./PaymentWindow.module.css";

export default function PaymentWindow({ total, close, buy }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={style.overlay}>
      <div className={style.main}>
        <h1 className={style.heading}>Payment</h1>
        <div className={style.amount__container}>
          <p>Amount : {total} </p>
        </div>
        <div>
          <form className={style.form} onSubmit={onSubmit}>
            <label htmlFor="payment">Select payment Option : </label>
            <select name="payment" id="payment">
              <option value="UPI">UPI</option>
              <option value="Netbanking">Netbanking</option>
              <option value="UPI">Credit/Debit Card</option>
            </select>
            <div className={style.actions}>
              <button type="button" onClick={close}>
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => {
                  buy();
                  close();
                }}
              >
                Complete Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
