import React from "react";
import "./CheckoutPage.css";
import CheckoutSummary from "../components/Checkout/CheckoutSummary";
import CheckoutDelivery from "../components/Checkout/CheckoutDelivery";
import CheckoutPayment from "../components/Checkout/CheckoutPayment";
import CheckoutConfirm from "../components/Checkout/CheckoutConfirm";
import { useSelector } from "react-redux";

export const CheckoutPage = () => {
  const cartdata = useSelector((state) => state.cartdata);
  return (
    <div className="checkoutPage">
      <div className="checkoutPageheader">
        <h1>Checkout</h1>
      </div>
      <div className="checkoutPagemiddle">
        <CheckoutSummary cartdata={cartdata} />
        {/* <CheckoutDelivery /> */}
        {/* <CheckoutPayment /> */}
        <CheckoutConfirm />
      </div>
    </div>
  );
};
