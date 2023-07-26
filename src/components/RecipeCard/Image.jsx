import "./Image.css";
import { FaCheck } from "react-icons/fa";
function Image({ imageUrl, price, recipepurchased }) {
  return (
    <div className="recipe-image">
      <img src={imageUrl} alt="Recipe" />
      {recipepurchased === 1 ? (
        <p className="recipepurchasedicon">
          <FaCheck />
        </p>
      ) : (
        <p className="recipe-price">&#8377;{price}</p>
      )}
    </div>
  );
}

export default Image;
