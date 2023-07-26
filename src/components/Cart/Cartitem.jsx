import React from "react";
import Image from "../../components/RecipeCard/Image";
import Details from "../../components/RecipeCard/Details";
import { getTags } from "../../utils/gettags";
import RemoveCartitemButton from "./RemoveCartitemButton";
import "./Cartitem.css";

function Cartitem({ data, id: recipe_id }) {
  const taginputdata = {
    title: data.label,
    publisher: data.source,
    image_url: data.image,
    health_labels: data.healthLabels,
    meal_type: data.mealType,
    diet_labels: data.dietLabels,
    price: data.image.length,
  };

  return (
    <div className="cartitemcontainer">
      <Image imageUrl={data.image} price={data.image.length} />
      <Details
        title={data.label}
        publisher={data.source}
        tags={getTags(taginputdata)}
      />
      <RemoveCartitemButton recipe_id={recipe_id} data={data} />
    </div>
  );
}

export default Cartitem;
