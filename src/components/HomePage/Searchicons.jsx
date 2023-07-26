// import React from "react";
// import "./Searchicons.css";
// import { useNavigate } from "react-router-dom";

// function SearchIcons(props) {
//   const navigate = useNavigate();
//   const { name, category } = props;

//   return (
//     <div
//       className="Searchicons"
//       onClick={() => navigate(`/searchresults/${name}`)}
//     >
//       <div className="imagesection">
//         {/* <img src="/HomeImages/Vegetables/artichoke.png" alt={name} /> */}
//         <img src={`/HomeImages/${category}/${name}.png`} alt={name} />
//       </div>
//       <div className="namesection">
//         <h1>{name}</h1>
//       </div>
//     </div>
//   );
// }

// export default SearchIcons;

import React from "react";
import "./Searchicons.css";
import { useNavigate } from "react-router-dom";

function SearchIcons(props) {
  const navigate = useNavigate();
  const { name, category } = props;
  return (
    <div
      className="Searchicons"
      onClick={() => navigate(`/searchresults/${name}`)}
    >
      <div className="imagesection">
        <img src={`/HomeImages/${category}/${name}.png`} alt={name} />
      </div>
      <div className="namesection">
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default SearchIcons;
