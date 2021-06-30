import React from "react";

const Card = (props) => {
  const { dep } = props;
  //console.log(dep);

  return (
    <li className="card">
      <div className="data-container">
        <ul className="data-container-form">
          <li>{dep.date}</li>
          <li>{dep.code}</li>
          <li>{dep.nom}</li>
          <li>Déces: {dep.deces}</li>
          <li>Nombre de Guéris: {dep.gueris}</li>
          <li>Nombre Hospitalisés: {dep.hospitalises}</li>
          <li>Nouvelle Hospitalisation: {dep.nouvellesHospitalisations}</li>
          <li>Nouvelle Réanimation: {dep.nouvellesReanimations}</li>
          <li>Totale Réanimation: {dep.reanimation}</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
