import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Personaje from "./Personaje";
const PintarDatos = ({ nombrePersonaje }) => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    consumirApi(nombrePersonaje);
  }, [nombrePersonaje]);

  const consumirApi = async (nombre) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
      );
      if (!res.ok) {
        return Swal.fire({
          title: "!Error",
          text: "💀 oops, no results found 💀",
          icon: "error",
          confirmButtonText: "confirm",
        });
      }

      const datos = await res.json();
      console.log(datos.results);
      setPersonajes(datos.results);
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
