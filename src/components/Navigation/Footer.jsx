import React from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a food recipe website that provides delicious and healthy
            recipes for everyone to enjoy.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: vivekbansal338@gmail.com</p>
          <p>Phone: +91 7082309833</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <div className="social-icons_container">
              <a href="#">
                <span>
                  <BsFacebook />
                </span>
                <span>Facebook</span>
              </a>
              <a href="#">
                <span>
                  <FaTwitter />
                </span>
                <span>Twitter</span>
              </a>
              <a href="#">
                <span>
                  <AiFillInstagram />
                </span>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Food Recipes. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
