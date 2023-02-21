import React from "react";
import ProductsView from "../../views/ProductsView";

const AppContent = () => {
  return (
    <div className="flex-auto flex items-center justify-center py-6 px-8 sm:px-4 lg:px-28 bg-slate-800 gap-3">
      <ProductsView />
    </div>
  );
};

export default AppContent;
