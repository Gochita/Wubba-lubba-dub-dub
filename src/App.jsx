import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Barrita from "./components/Barrita";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";

const App = () => {
  const [nombrePersonaje, setNombrePersonaje] = useState("");

  return (
    <div className="container">
      <BrowserRouter>
        <Barrita />
        <Formulario setNombrePersonaje={setNombrePersonaje} />
        <br></br>
        <PintarDatos nombrePersonaje={nombrePersonaje} />
      </BrowserRouter>
    </div>
  );
};

export default App;
