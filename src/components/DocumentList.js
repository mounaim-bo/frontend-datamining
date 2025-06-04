import React from "react";

const DocumentList = ({ documents }) => {
  return (
    <div>
      <h3>📄 Liste des Paragraphes</h3>
      <ul>
        {documents.map(doc => (
          <li key={doc.id}>
            <strong>{doc.id} :</strong> {doc.texte}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
