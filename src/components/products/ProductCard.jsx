import { memo } from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-slate-300">
      <div className="h-48 bg-white p-4">
        <img className="object-contain object-center w-full h-full" src={product.image} alt="item-image" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
    </div>
  );
};
export default memo(ProductCard);
