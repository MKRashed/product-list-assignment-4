import ProductCart from "./components/ProductCart";
import ProductHeader from "./components/ProductHeader";
import { ProductCardProvider, ProductProvider } from "./provider";

export default function ProductSection() {
  return (
    <ProductProvider>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <ProductCardProvider>
          <ProductHeader />
          <ProductCart />
        </ProductCardProvider>
      </div>
    </ProductProvider>
  );
}
