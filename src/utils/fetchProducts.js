export const fetchProducts = async () => {
  const result = await fetch("https://fakestoreapi.com/products?limit=10");
  return result.json();
};
