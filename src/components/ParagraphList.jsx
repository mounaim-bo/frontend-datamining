const ParagraphList = ({ documents }) => {
  return (
    <div className="paragraph-container">
      <h2 className="main-title">Paragraphes</h2>
      {documents.length > 0 ? (
        <div className="documents-grid">
          {documents.map((doc) => (
            <div key={doc.id} className="document-card">
              <h3 className="document-title">{doc.id}</h3>
              <p className="document-text">{doc.texte}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">📄</div>
          <h3 className="empty-state-title">Aucun document</h3>
          <p className="empty-state-description">
            Les paragraphes apparaîtront ici une fois ajoutés.
          </p>
        </div>
      )}
    </div>
  );
};

export default ParagraphList;