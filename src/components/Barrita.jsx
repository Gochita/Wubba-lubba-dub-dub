import React from "react";
import { NavLink } from "react-router-dom";

const Barrita = () => {
  return (
    <div>
      <h1>Api rick and morty</h1>
      <div>
          <NavLink to={"/"}>
              home
          </NavLink>
          <NavLink to={"/favoritos"}>
              favoritos
          </NavLink>
      </div>
    </div>
  );
};

export default Barrita;
