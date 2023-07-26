import React from "react";
import { useDispatch } from "react-redux";
import { addorderhistoryitemasync } from "../../redux/orderhistorydataSlice";
import { clearCartAsync } from "../../redux/CartdataSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const CheckoutConfirm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cartdata);
  const userid = useSelector((state) => state.useriddata.userid);
  const itemdetails = cartdata.items.map((item) => {
    return {
      uri: item.uri,
      label: item.label,
      price: item.image.length,
      quantity: 1,
    };
  });
  const deliveryDetails = {
    name: "John Doe",
    address: "123 Main St",
  };
  const discount = 10;

  async function handleplaceorder(e) {
    e.preventDefault();
    const orderdata = {
      items: itemdetails,
      quantity: cartdata.quantity,
      totalamount: cartdata.total,
      deliverydetails: deliveryDetails,
      totaldiscount: discount,
      orderdate: new Date().toLocaleString(),
    };
    try {
      const response = await dispatch(
        addorderhistoryitemasync({ userid: userid, orderdata: orderdata })
      );
      if (response.status === "success") {
        toast.success("Order Placed Successfully");
      }

      await dispatch(clearCartAsync(userid));
    } catch (err) {
      toast.error("Error Placing Order");
    }

    navigate("/");
  }
  return (
    <div className="checkout-confirm">
      {/* Order Confirmation */}
      <h2>Confirm Order</h2>
      <p>Please review your order details before confirming.</p>
      {cartdata.quantity > 0 && (
        <button onClick={handleplaceorder}>Confirm Order</button>
      )}
    </div>
  );
};

export default CheckoutConfirm;
