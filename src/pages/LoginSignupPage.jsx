import React, { useEffect, useState } from "react";
import "./LoginSignupPage.css";
import { isValidEmail, isValidPassword } from "../utils/loginsignup";
import { useDispatch } from "react-redux";
import { setUserId, clearUserId } from "../redux/UseridSlice";
import { useNavigate } from "react-router-dom";
import { loadBookmarksAsync } from "../redux/BookmarkdataSlice";
import { loadCartAsync } from "../redux/CartdataSlice";
import { loadorderhistoryasync } from "../redux/orderhistorydataSlice";
import { setname } from "../redux/UseridSlice";
import { toast } from "react-toastify";

export function LoginSignupPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logindisabled, setlogindisabled] = useState(true);
  const [signupdisabled, setsignupdisabled] = useState(true);

  function clearinput() {
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  }

  useEffect(() => {
    // login disabled
    if (
      !isValidEmail(email) ||
      !isValidPassword(password) ||
      username.length < 5
    ) {
      setlogindisabled(true);
    }

    // signup disabled
    if (
      !isValidEmail(email) ||
      !isValidPassword(password) ||
      confirmPassword !== password ||
      username.length < 5
    ) {
      setsignupdisabled(true);
    }
  }, [email, username, password, confirmPassword]);

  const handlelogin = async (event) => {
    event.preventDefault();
    const logindata = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://recipe-rackbackend.vercel.app/api/v2/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(logindata),
        }
      );

      const data = await response.json();
      if (data.status === "unsuccess") {
        throw new Error(data.message);
      }
      if (data.status === "success") {
        dispatch(setUserId(data.user._id));
        dispatch(setname(data.user.username));
        dispatch(loadBookmarksAsync(data.user._id));
        dispatch(loadCartAsync(data.user._id));
        dispatch(loadorderhistoryasync(data.user._id));
        navigate("/");
        toast.success("Login Successfull");
      }
    } catch (err) {
      toast.error(err.message);
      dispatch(clearUserId());
    }
  };

  const handlesignup = async (event) => {
    console.log("handlesignup");
    event.preventDefault();
    const signupdata = {
      email: email,
      username: username,
      password: password,
    };
    try {
      const response = await fetch(
        "https://recipe-rackbackend.vercel.app/api/v2/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupdata),
        }
      );

      const data = await response.json();
      if (data.error) {
        console.log(data.error);
        throw new Error("username or email already in use");
      }
      if (data.status === "unsuccess") {
        throw new Error(data.message);
      }
      if (data.status === "success") {
        dispatch(setUserId(data.user._id));
        dispatch(clearUserId());
        navigate("/");
        toast.success("Signup Successfull");
      }
      clearinput();
    } catch (err) {
      toast.error(err.message);
      dispatch(clearUserId());
    }
    clearinput();
  };

  return (
    <div className="login-signup-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={isLogin ? handlelogin : handlesignup}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={isValidEmail(email) ? "valid" : "invalid"}
            required
          />
        </div>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={username.length >= 5 ? "valid" : "invalid"}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={isValidPassword(password) ? "valid" : "invalid"}
            required
          />
        </div>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={
                confirmPassword === password && isValidPassword(password)
                  ? "valid"
                  : "invalid"
              }
              required
            />
          </div>
        )}
        {/* <button type="submit">{isLogin ? "Login" : "Sign Up"}</button> */}

        {isLogin && <button type="submit">Login</button>}
        {!isLogin && <button type="submit">Sign up</button>}
      </form>
      <div className="toggle-login-signup">
        {isLogin ? (
          <>
            Don't have an account?{" "}
            <button
              onClick={() => {
                setIsLogin(false);
                clearinput();
              }}
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => {
                setIsLogin(true);
                clearinput();
              }}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
