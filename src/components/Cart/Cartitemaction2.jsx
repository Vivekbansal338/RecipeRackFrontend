import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Cartitemaction.css";

function Cartitemaction({ handleDecrement, handleIncrement, quantity }) {
  return (
    <div className="cartitemaction">
      <button
        onClick={handleDecrement}
        className="cartitemactionbutton decrease"
      >
        <FaMinus />
      </button>
      <input
        className="cartitemactioninput"
        type="number"
        min="1"
        value={quantity}
        readOnly
      />
      <button
        onClick={handleIncrement}
        className="cartitemactionbutton increase"
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default Cartitemaction;
