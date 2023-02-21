import React from "react";
import box from "../../assets/box.svg";

const AppHeader = () => {
  return (
    <header>
      <div className="flex flex-row items-center gap-x-3 w-full p-4 bg-slate-900">
        <img src={box} className="h-12" alt="Logo" />
        <p className="text-4xl font-bold text-white opacity-60">Items list</p>
      </div>
    </header>
  );
};

export default AppHeader;
