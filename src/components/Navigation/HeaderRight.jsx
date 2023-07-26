import { FaCartArrowDown } from "react-icons/fa";
import "./Header.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUserId } from "../../redux/UseridSlice";
import { clearBookmarks } from "../../redux/BookmarkdataSlice";
import { clearCart } from "../../redux/CartdataSlice";
import { clearOrderhistory } from "../../redux/orderhistorydataSlice";

function HeaderRight() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedin = useSelector((state) => state.useriddata.userid);
  const cartquantity = useSelector((state) => state.cartdata.quantity);
  const handleloginsignup = () => {
    if (loggedin) {
      // localStorage.removeItem("token");
      // localStorage.removeItem("user");
      // window.location.reload();

      //means we are clicking on logout button
      navigate("/");
      dispatch(clearUserId());
      dispatch(clearBookmarks());
      dispatch(clearCart());
      dispatch(clearOrderhistory());
    } else {
      navigate("/loginsignup");
    }
  };

  return (
    <div className="headerright">
      <div className="headercart">
        <span className="headercartcount">
          {cartquantity < 10 && cartquantity > 0
            ? `0 ${cartquantity}`
            : cartquantity}
        </span>
        <NavLink to="/cart">
          <FaCartArrowDown size={20} className="headericon" />
        </NavLink>
      </div>

      {loggedin ? (
        <button className="headerlogout-btn" onClick={handleloginsignup}>
          Logout
        </button>
      ) : (
        <button className="headerlogout-btn" onClick={handleloginsignup}>
          Login
        </button>
      )}
    </div>
  );
}

export default HeaderRight;
