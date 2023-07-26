import React from "react";
import { removeItemAsync } from "../../redux/CartdataSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const RemoveCartitemButton = ({ data, recipe_id }) => {
  const userid = useSelector((state) => state.useriddata.userid);
  const dispatch = useDispatch();

  async function Fandleremovefromcart(e) {
    e.stopPropagation();
    try {
      const response = await dispatch(
        removeItemAsync({
          userid: userid,
          recipe_id: recipe_id,
          price: data.image.length,
        })
      );
      if (response.success) {
        toast.success("removed from cart successfully!");
      }
    } catch (err) {
      toast.error("Error removing from cart!");
    }
  }

  return (
    <div className="cartitembuttons">
      <button className="cartitemremovebutton" onClick={Fandleremovefromcart}>
        Remove
      </button>
    </div>
  );
};

export default RemoveCartitemButton;
