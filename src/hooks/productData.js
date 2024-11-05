import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]); // Initialize as an array
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchProductData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching product data...",
      });

      const response = await fetch(
        `https://fakestoreapi.com/products?limit=10`
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
    setLoading({
      state: true,
      message: "Finding products...",
    });
    fetchProductData();
  }, []);

  return {
    products,
    loading,
    error,
  };
};

export default useProduct;
