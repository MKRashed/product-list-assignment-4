import { useContext, useEffect, useState } from "react";
import { ProductCardContext } from "../context";

const useProduct = () => {
  const { sorting, filtering, searchValue } = useContext(ProductCardContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchProductData = async (category) => {
    try {

      let apiUrl = `https://fakestoreapi.com/products`;

      setLoading({
        ...loading,
        state: true,
        message: "Fetching product data...",
      });

      if(filtering) {
        apiUrl += `/category/${category}`;
      }

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Fetching product data failed: ${response.status}`);
      }

      const data = await response.json();

      data.sort((a, b) => {
        return sorting === 'asc' ? a.price - b.price : b.price - a.price;
      });

      if (searchValue) {
        return data.filter((product) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        );
      }

      setProducts(data); 

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
    fetchProductData(filtering);
  }, []);

  useEffect(() => {

    let updatedProducts = [...products];

    if (filtering) {
      fetchProductData(filtering);
    }

      if (sorting) {
        updatedProducts.sort((a, b) => {
          return sorting === 'asc' ? a.price - b.price : b.price - a.price;
        });
      }

      if (searchValue) {
        updatedProducts = updatedProducts.filter((product) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        );
      } else {
        fetchProductData(filtering);
      }

      setProducts(updatedProducts);

  }, [sorting, filtering, searchValue]);

  return {
    products,
    loading,
    error,
  };
};

export default useProduct;
