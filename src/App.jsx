import React, { useState } from "react";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";

const App = () => {
  
    const [nombrePersonaje, setNombrePersonaje] =useState('')

  return (
    <div className="container">
      <h1>Api rick and morty</h1>
         <Formulario setNombrePersonaje={setNombrePersonaje}/>
         <br></br>
         <PintarDatos nombrePersonaje={nombrePersonaje} />
    </div>
  );
};

export default App;
