// // Section.jsx
// import React from "react";
// import Searchicons from "./Searchicons";
// import "./Section.css";

// export default function Section({ title, items, type, category }) {
//   return (
//     <section className="section">
//       <h2>{title}</h2>

//       <div
//         className={`section__items ${
//           type === "vertical" ? "vertical" : "horizontal"
//         }`}
//       >
//         {items.map((item) => (
//           <Searchicons name={item.name} key={item.name} category={category} />
//         ))}
//       </div>
//     </section>
//   );
// }

// Section.jsx
import React from "react";
import Searchicons from "./Searchicons";
import "./Section.css";

export default function Section({ title, items, type, category }) {
  return (
    <section className="section">
      <h2>{title}</h2>

      <div
        className={`section__items ${
          type === "vertical" ? "vertical" : "horizontal"
        }`}
      >
        {items.map((item) => (
          <Searchicons name={item} key={item} category={category} />
        ))}
      </div>
    </section>
  );
}
