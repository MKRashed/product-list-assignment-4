import { useState } from "react";
import { ProductCardContext } from "../context";
const ProductCardProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [sorting, setSorting] = useState("asc");
  const [filtering, setFiltering] = useState(null);
  return (
    <ProductCardContext.Provider
      value={{
        cartData,
        setCartData,
        sorting,
        setSorting,
        filtering,
        setFiltering,
      }}
    >
      {children}
    </ProductCardContext.Provider>
  );
};
export default ProductCardProvider;
