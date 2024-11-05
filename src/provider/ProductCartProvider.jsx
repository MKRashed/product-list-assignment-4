import { useState } from "react";
import { ProductCardContext } from "../context";
const ProductCardProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  return (
    <ProductCardContext.Provider value={{ cartData, setCartData }}>
      {children}
    </ProductCardContext.Provider>
  );
};
export default ProductCardProvider;
