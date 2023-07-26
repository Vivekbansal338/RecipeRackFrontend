import {
  FaLeaf,
  FaFish,
  FaDrumstickBite,
  FaCoffee,
  FaEgg,
  FaUtensils,
  FaCookieBite,
  FaMugHot,
  FaBalanceScale,
  FaSeedling,
  FaDumbbell,
  FaBreadSlice,
  FaHeartbeat,
  FaTint,
} from "react-icons/fa";

const icons = {
  Vegetarian: (
    <FaLeaf
      style={{
        color: "green",
        backgroundColor: "lightgreen",
        borderRadius: "50%",
        fontSize: "24px",
      }}
    />
  ),

  "Non Vegetarian": (
    <FaDrumstickBite
      style={{
        color: "red",
        backgroundColor: "lightcoral",
        borderRadius: "50%",
        fontSize: "24px",
      }}
    />
  ),
  Breakfast: (
    <FaCoffee
      style={{
        color: "brown",
        backgroundColor: "burlywood",
        borderRadius: "50%",
        fontSize: "24px",
      }}
    />
  ),
  Brunch: (
    <FaEgg
      style={{
        color: "yellow",
        backgroundColor: "lightyellow",
        borderRadius: "50%",
        fontSize: "24px",
      }}
    />
  ),
  "lunch/dinner": (
    <FaUtensils
      style={{
        color: "gray",
        backgroundColor: "lightgray",
        borderRadius: "50%",
        fontSize: "24px",
      }}
    />
  ),
  Snack: (
    <FaCookieBite
      style={{
        color: "purple",
        backgroundColor: "lavender",
        borderRadius: "50%",
        fontSize: "24px",
      }}
    />
  ),
  Teatime: (
    <FaMugHot
      style={{
        color: "orange",
        backgroundColor: "peachpuff",
        borderRadius: "50%",
        fontSize: "24px",
      }}
    />
  ),
  Balanced: (
    <FaBalanceScale
      style={{
        color: "teal",
        backgroundColor: "lightcyan",
        borderRadius: "50%",
        fontSize: "24px",
      }}
    />
  ),
  "High-Fiber": (
    <FaSeedling
      style={{
        color: "green",
        backgroundColor: "lightgreen",
        borderRadius: "50%",
        fontSize: "24px",
      }}
    />
  ),
  "High-Protein": (
    <FaDumbbell
      style={{
        color: "darkblue",
        backgroundColor: "lightskyblue",
        borderRadius: "50%",
        fontSize: "24px",
      }}
    />
  ),
  "Low-Carb": (
    <FaBreadSlice
      style={{
        color: "goldenrod",
        backgroundColor: "wheat",
        borderRadius: "50%",
        fontSize: "24px",
      }}
    />
  ),
  "Low-Fat": (
    <FaHeartbeat
      style={{
        color: "pink",
        backgroundColor: "lightpink",
        borderRadius: "50%",
        fontSize: "24px",
      }}
    />
  ),
  "Low-Sodium": (
    <FaTint
      style={{
        color: "lightblue",
        backgroundColor: "aliceblue",
        borderRadius: "50%",
        fontSize: "24px",
      }}
    />
  ),
};

export default icons;
