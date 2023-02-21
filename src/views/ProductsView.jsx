import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductsGallery from "../components/products/ProductsGallery";
import SearchBox from "../components/SearchBox";
import { filterProducts } from "../redux/reducers/productsSlice";

const ProductsView = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.filteredProducts);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch({ type: "products/fetchProducts" });
  }, [dispatch]);

  const filter = useCallback((filter) => {
    dispatch(filterProducts(filter));
  }, []);

  return (
    <div className="w-full h-full justify-center items-center">
      <SearchBox action={filter} />
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      <ProductsGallery products={productsList} />
    </div>
  );
};
export default ProductsView;
