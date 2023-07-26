import React from "react";

const CheckoutPayment = () => {
  return (
    <div className="checkout-payment">
      {/* Payment Details */}
      <h2>Payment Details</h2>
      <form>
        <label htmlFor="card">Card Number:</label>
        <input type="text" id="card" required />
        <label htmlFor="expiry">Expiry Date:</label>
        <input type="text" id="expiry" required />
        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" required />
        {/* Additional payment options and details can be added here */}
      </form>
    </div>
  );
};

export default CheckoutPayment;
