import { useState } from "react";
import { ProductCardContext } from "../context";
const ProductCardProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [sorting, setSorting] = useState(null);
  const [filtering, setFiltering] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  return (
    <ProductCardContext.Provider
      value={{
        cartData,
        setCartData,
        sorting,
        setSorting,
        filtering,
        setFiltering,
        searchValue,
        setSearchValue
      }}
    >
      {children}
    </ProductCardContext.Provider>
  );
};
export default ProductCardProvider;
