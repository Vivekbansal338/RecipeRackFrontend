import "./RecipeCard.css";
import Image from "./Image";
import BookmarkButton from "./BookmarkButton";
import AddToCartButton from "./AddToCartButton";
import Details from "./Details";
import { getTags } from "../../utils/gettags";
import { useNavigate } from "react-router-dom";
import { usePurchasedStatus } from "../../hooks/usePurchasedStatus";
import { toast } from "react-toastify";

function RecipeCard({ data, id: recipe_id, purchaseddata }) {
  const { recipepurchased } = usePurchasedStatus(purchaseddata, recipe_id);
  const navigate = useNavigate();
  const taginputdata = {
    title: data.label,
    publisher: data.source,
    image_url: data.image,
    health_labels: data.healthLabels,
    meal_type: data.mealType,
    diet_labels: data.dietLabels,
    price: data.image.length,
  };

  function handlerecipedetails(e) {
    e.stopPropagation();
    if (!recipepurchased) {
      toast.error("Purchase this recipe to view details!");
      return;
    }
    if (recipepurchased) {
      const lastHashIndex = recipe_id.lastIndexOf("#");
      const final_id = recipe_id.substring(lastHashIndex + 1);
      navigate(`/recipedetails/${final_id}`);
    }
  }

  return (
    <div className="recipecardcontainer" onClick={handlerecipedetails}>
      <Image
        imageUrl={data.image}
        price={data.image.length}
        recipepurchased={recipepurchased}
      />
      <Details
        title={data.label}
        publisher={data.source}
        tags={getTags(taginputdata)}
      />
      <div className="recipecardbuttons">
        <BookmarkButton
          data={data}
          recipe_id={recipe_id}
          recipepurchased={recipepurchased}
        />
        {!recipepurchased && (
          <AddToCartButton data={data} recipe_id={recipe_id} />
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
