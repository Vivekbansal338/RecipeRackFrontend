import { useState, useEffect } from "react";

export function useCartStatus(cartData, recipeId) {
  const [alreadyInCart, setAlreadyInCart] = useState(false);

  useEffect(() => {
    function checkIfAlreadyInCart() {
      for (let i = 0; i < cartData.items.length; i++) {
        if (cartData.items[i].uri === recipeId) {
          setAlreadyInCart(true);
          return;
        }
      }
      setAlreadyInCart(false);
    }
    checkIfAlreadyInCart();
  }, [cartData, recipeId]);

  return [alreadyInCart, setAlreadyInCart];
}
