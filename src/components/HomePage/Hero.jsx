// Hero.jsx

import React, { useRef } from "react";
import "./Hero.css";

export default function Hero({ handleGetStarted }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Welcome to the World of Food Recipes</h1>
        <p>Discover new and healthy recipes</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </section>
  );
}
