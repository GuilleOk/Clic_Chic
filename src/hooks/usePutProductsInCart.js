import { useState, useCallback } from "react";

export const usePutProductsInCart = () => {
  const [productsToReturn, setProductsToReturn] = useState([]);

  const getProducts = useCallback(({ allProducts }) => {
    // Obtener productos con `inCart > 0`
    const productsInCart = allProducts.flatMap(itemCategory => 
      itemCategory.content.filter(item => item.inCart > 0)
    );

    setProductsToReturn(productsInCart);
  }, []);

  return { products: productsToReturn, getProducts };
};
