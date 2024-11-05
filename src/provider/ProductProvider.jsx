import { ProductContext } from "../context";
import { useProduct } from "../hooks";

const ProductProvider = ({ children }) => {
  const { products, loading, error } = useProduct();
  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
