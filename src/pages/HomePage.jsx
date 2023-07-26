// import React, { useRef } from "react";
// import { useSelector } from "react-redux";
// import {
//   vegetables,
//   fruits,
//   herbsandspecies,
//   dishesandfoods,
//   legumesandbeans,
//   meatandpoultry,
// } from "../services/homeiconsname";
// import Hero from "../components/HomePage/Hero";
// import Section from "../components/HomePage/Section";
// import "./HomePage.css";

// export function HomePage() {
//   const targetRef = useRef(null);
//   // const searchItems = useSelector((state) => state.HomeRecipeOptionsdata.data);
//   // const herbsAndSpices = searchItems[3];
//   // const vegetables = searchItems[0];
//   // const fruits = searchItems[1];
//   // const dishesAndFoods = searchItems[2];
//   // const legumesAndBeans = searchItems[4];
//   // const meatAndPoultry = searchItems[5];
//   // const herbsAndSpices = searchItems[3];
//   // const vegetables = searchItems[0];
//   // const fruits = searchItems[1];
//   // const dishesAndFoods = searchItems[2];
//   // const legumesAndBeans = searchItems[4];
//   // const meatAndPoultry = searchItems[5];

//   const handleGetStarted = () => {
//     targetRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="home-page">
//       <Hero handleGetStarted={handleGetStarted} />
//       <Section
//         title="Herbs & Spices"
//         items={herbsAndSpices.items}
//         type="vertical"
//         category="herbsandspecies"
//       />
//       <div className="home-page__two-col" ref={targetRef}>
//         <Section
//           title="Vegetables"
//           items={vegetables.items}
//           type="vertical"
//           category="vegetables"
//         />
//         <Section
//           title="Fruits"
//           items={fruits.items}
//           type="vertical"
//           category="fruits"
//         />
//       </div>
//       <div className="home-page__two-col">
//         <Section
//           title="Dishes & Foods"
//           items={dishesAndFoods.items}
//           type="vertical"
//           category="dishesandfoods"
//         />
//         <Section
//           title="Meat & Poultry"
//           items={meatAndPoultry.items}
//           type="vertical"
//           category="meatandpoultry"
//         />
//       </div>
//       <Section
//         title="Legumes & Beans"
//         items={legumesAndBeans.items}
//         type="vertical"
//         category="legumesandbeans"
//       />
//     </div>
//   );
// }

import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
  vegetables,
  fruits,
  herbsandspecies,
  dishesandfoods,
  legumesandbeans,
  meatandpoultry,
} from "../utils/homeicons";
import Hero from "../components/HomePage/Hero";
import Section from "../components/HomePage/Section";
import "./HomePage.css";

export function HomePage() {
  const targetRef = useRef(null);
  const handleGetStarted = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-page">
      <Hero handleGetStarted={handleGetStarted} />
      <Section
        title="Herbs & Spices"
        items={herbsandspecies}
        type="vertical"
        category="herbsandspecies"
      />
      <div className="home-page__two-col" ref={targetRef}>
        <Section
          title="Vegetables"
          items={vegetables}
          type="vertical"
          category="vegetables"
        />
        <Section
          title="Fruits"
          items={fruits}
          type="vertical"
          category="fruits"
        />
      </div>
      <div className="home-page__two-col">
        <Section
          title="Dishes & Foods"
          items={dishesandfoods}
          type="vertical"
          category="dishesandfoods"
        />
        <Section
          title="Meat & Poultry"
          items={meatandpoultry}
          type="vertical"
          category="meatandpoultry"
        />
      </div>
      <Section
        title="Legumes & Beans"
        items={legumesandbeans}
        type="vertical"
        category="legumesandbeans"
      />
    </div>
  );
}
