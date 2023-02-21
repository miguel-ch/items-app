import React from "react";

const AppFooter = () => {
  return (
    <footer>
      <div className="p-3 bg-slate-900 bottom-0 mx-auto text-slate-600">
        <center>
          <b>
            Weather App | {""}
            <a href="https://github.com/miguel-ch/items-app" target="_blank">
              Github Repository
            </a>
          </b>
          <p>2023. Miguel Chaparro</p>
        </center>
      </div>
    </footer>
  );
};

export default AppFooter;
