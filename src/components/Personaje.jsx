import React from "react";

const Personaje = ({ personaje }) => {
  const { name, species, location, gender, image } = personaje;

  return (

    <div className="col-md-4 mb-2">
      <div className="card">
          <img src={image} alt={`imagen-${name}`} className="card-img-top" />
          <h5>{name}</h5>
          <p>{species}</p>
        </div>
      </div>

  );
};

export default Personaje;
