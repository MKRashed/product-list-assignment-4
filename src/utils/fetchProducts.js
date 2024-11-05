export const fetchProducts = async () => {
  const result = await fetch("https://fakestoreapi.com/products?limit=5");
  return result.json();
};
