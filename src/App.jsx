import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Barrita from "./components/Barrita";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";
import "./style/coolstuff.scss";

const App = () => {
  const [nombrePersonaje, setNombrePersonaje] = useState("");

  return (
    <div className="container ">
      <header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Barrita />} />
          </Routes>
        </BrowserRouter>
      </header>

      {/* <Barrita /> */}
      <Formulario setNombrePersonaje={setNombrePersonaje} />
      <br></br>
      <PintarDatos nombrePersonaje={nombrePersonaje} />
      <footer>
        <div page></div>
      </footer>
    </div>
  );
};

export default App;
