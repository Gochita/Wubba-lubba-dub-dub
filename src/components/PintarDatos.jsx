import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Personaje from "./Personaje";
import axios from "axios";
const PintarDatos = ({ nombrePersonaje }) => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    consumirApi(nombrePersonaje);
  }, [nombrePersonaje]);

const creaPeticion = axios.create();



  const consumirApi = async (nombre) => {
    try {
     
       // para vivos `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
       // para muertos `https://rickandmortyapi.com/api/character/?name=${nombre}&status=dead`
    
      const res = await creaPeticion.get(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
      if (!res.request) {
        return Swal.fire({
          title: "!Error",
          text: "💀 oops, no results found 💀",
          icon: "error",
          confirmButtonText: "confirm",
        });
      }

      setPersonajes(res.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      
    }
    
  };

  return (
   
      <div className="row mt-2 mb-5" >
        {personajes.map((item) => (
          <Personaje key={item.id} personaje={item} />
        ))}
      </div>

  );
};

export default PintarDatos;
