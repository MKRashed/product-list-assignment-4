import { useContext, useEffect, useState } from "react";
import { ProductCardContext } from "../context";

const useProduct = () => {
  const { sorting, filtering } = useContext(ProductCardContext);
  console.log({ filtering });

  const [products, setProducts] = useState([]); // Initialize as an array
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchProductData = async (sorting, filtering) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching product data...",
      });

      const response = await fetch(
        `https://fakestoreapi.com/products?limit=10&sort=${sorting}`
      );
      if (!response.ok) {
        throw new Error(`Fetching product data failed: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data); // Store the entire array of products
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    if (sorting && filtering) {
      fetchProductData(sorting, filtering);
    }
  }, [sorting, filtering]);

  return {
    products,
    loading,
    error,
  };
};

export default useProduct;
