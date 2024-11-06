export const fetchProductCategory = async () => {
  const result = await fetch("https://fakestoreapi.com/products/categories");
  return result.json();
};
