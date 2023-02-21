import ProductCard from "./ProductCard";

const ProductsGallery = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-9 justify-center my-9">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};
export default ProductsGallery;
