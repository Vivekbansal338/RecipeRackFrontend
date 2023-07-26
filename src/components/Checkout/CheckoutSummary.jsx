import React from "react";
import "./CheckoutSummary.css";

const CheckoutSummary = ({ cartdata }) => {
  return (
    <div className="checkout-summary">
      <h2>Order Summary</h2>
      <div className="cart-items">
        {cartdata.items.map((item) => {
          return (
            <div className="item-details" key={item.url}>
              <p>{`Name : ${item.label}`}</p>
              <p>{`Quantity : ${1}`}</p>
              <p>{`Price :  \u20B9 ${item.image.length}`}</p>
            </div>
          );
        })}
      </div>
      <div className="total-amount">
        <p>{`Total Amount : \u20B9 ${cartdata.total}`}</p>
        <p>{`Total Quantity : ${cartdata.quantity}`}</p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
