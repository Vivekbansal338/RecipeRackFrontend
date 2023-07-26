import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import "./AddToCartButton.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemAsync } from "../../redux/CartdataSlice";
import { useCartStatus } from "../../hooks/useCartStatus";
import { toast } from "react-toastify";

function AddToCartButton({ data, recipe_id }) {
  const dispatch = useDispatch();
  const userid = useSelector((state) => state.useriddata.userid);
  const cartData = useSelector((state) => state.cartdata);
  const [alreadyInCart, setAlreadyInCart] = useCartStatus(cartData, recipe_id);
  async function handleAddToCart(e) {
    e.stopPropagation();
    if (!alreadyInCart) {
      try {
        const response = await dispatch(
          addItemAsync({ userid: userid, recipedata: data })
        );
        if (response.success) {
          toast.success("added to cart successfully!");
        }
      } catch (err) {
        if (!userid) {
          toast.error("Please login to add to cart!");
          return;
        }
        toast.error("Error adding to cart!");
      }
    }
  }

  return (
    <button
      className={`addtocartbutton ${alreadyInCart ? "alreadyincart" : ""}`}
      onClick={handleAddToCart}
      aria-label="cart button"
    >
      {alreadyInCart ? (
        <AiFillCheckCircle style={{ fontSize: "24px" }} />
      ) : (
        <FaShoppingCart style={{ fontSize: "24px" }} />
      )}
    </button>
  );
}

export default AddToCartButton;
