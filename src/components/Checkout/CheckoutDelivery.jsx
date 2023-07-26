import React from "react";

const CheckoutDelivery = () => {
  return (
    <div className="checkout-delivery">
      <h2>Delivery Information</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" required />
        <label htmlFor="city">City:</label>
        <input type="text" id="city" required />
        <label htmlFor="zipcode">Zip Code:</label>
        <input type="text" id="zipcode" required />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" required />
      </form>
    </div>
  );
};

export default CheckoutDelivery;
