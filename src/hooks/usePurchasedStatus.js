import { useState, useEffect } from "react";

export const usePurchasedStatus = (purchaseddata, recipe_id) => {
  const [recipepurchased, setrecipepurchased] = useState(0);
  useEffect(() => {
    for (let i = 0; i < purchaseddata?.data?.purchases?.length; i++) {
      if (purchaseddata.data.purchases[i] === recipe_id) {
        setrecipepurchased(1);
        break;
      }
    }
  }, [purchaseddata, recipe_id]);

  return { recipepurchased };
};
