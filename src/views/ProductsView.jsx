import ProductsGallery from "../components/products/ProductsGallery";
import SearchBox from "../components/SearchBox";

import items from "../items.json";

const ProductsView = () => {
  return (
    <div className="w-full h-full">
      <SearchBox />
      <ProductsGallery products={items} />
    </div>
  );
};
export default ProductsView;
