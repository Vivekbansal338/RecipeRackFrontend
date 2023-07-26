import React from "react";
import Cartitem from "../components/Cart/Cartitem";
import { useSelector } from "react-redux";
import "./CartPage.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function CartPage() {
  const cartdata = useSelector((state) => state.cartdata);

  return (
    <div className="cartcontainer">
      <div className="cartcontainerheader">
        <h1>My Cart </h1>
        {cartdata?.items?.length > 0 && (
          <NavLink to="/checkout" className="checkoutbutton">
            Checkout
          </NavLink>
        )}
      </div>
      <div className="cartcontainermiddle">
        {cartdata?.items?.length === 0 && (
          <div className="cartempty">
            <h1 className="empty-message">Cart Empty</h1>
            <AiOutlineShoppingCart className="carticon" />
          </div>
        )}
        {cartdata?.items?.map(function (recipe, index) {
          return <Cartitem data={recipe} key={recipe.uri} id={recipe.uri} />;
        })}
      </div>
    </div>
  );
}
