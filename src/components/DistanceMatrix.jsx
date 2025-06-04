import React from "react";
import "./styles/DistanceMatrix.css";

const DistanceMatrix = ({ matrice }) => {
  if (!Array.isArray(matrice) || matrice.length === 0) {
    return <p>Aucune donnée disponible.</p>;
  }

  const etiquettes = matrice.map((_, i) => `P${i + 1}`);

  return (
    <div className="distance-matrix">
      <table>
        <thead>
          <tr>
            <th></th>
            {etiquettes.map((label, idx) => (
              <th key={idx}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrice.map((row, i) => (
            <tr key={i}>
              <th>{etiquettes[i]}</th>
              {Array.isArray(row) ? row.map((val, j) => (
                <td key={j}>{val.toFixed(2)}</td>
              )) : <td colSpan={etiquettes.length}>Erreur : ligne non valide</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DistanceMatrix;


 