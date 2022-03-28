import React from "react";

const Personaje = ({ personaje }) => {
  const { name, species, location, gender, image } = personaje;

  return (
    <div className="col-md-4 mb-2">
      <div className="card">
        <img src={image} alt={`imagen-${name}`} className="card-img-top" />
        <h5>Nombre: {name}</h5>
        <b>Especie: {species}</b>
        <br />
        <b>Ubicacion: {location.name}</b>
        <br />
        <b>Genero: {gender}</b>
        <br />
      </div>
    </div>
  );
};

export default Personaje;
