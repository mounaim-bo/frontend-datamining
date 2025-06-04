import React, { useEffect, useState } from 'react';
import { fetchClassificationData } from './services/api';
import ParagraphList from './components/ParagraphList';
import Dendrogram from './components/Dendrogram';
import './App.css'; // Importez le fichier CSS
import './components/styles/ParagrapheList.css';
import DistanceMatrix from './components/DistanceMatrix';
import DocumentationSection from './components/DocumentationSection';

// Composant Page d'Accueil
const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div>
          <h1 className="home-title">
            Analyse Hiérarchique du Livre
          </h1>
          <div className="home-divider"></div>
          <p className="home-description">
            Explorez la structure du livre Monde de la mer à travers une analyse hiérarchique avancée. Visualisez les relations entre les paragraphes et découvrez la matrice des distances.
          </p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3 className="feature-title">
              Liste des Paragraphes
            </h3>
            <p className="feature-description">
              Consultez les dix premiers paragraphes du livre, accompagnés de leurs métadonnées et de leurs classifications.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🌳</div>
            <h3 className="feature-title">
              Dendrogramme
            </h3>
            <p className="feature-description">
              Visualisez la hiérarchie et les relations entre les différentes parties du livre.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🧮</div>
            <h3 className="feature-title">
              Matrice de distances
            </h3>
            <p className="feature-description">
              Explorez en détail la matrice des distances, qui met en évidence les similitudes et différences entre les paragraphes du livre, en se basant sur une mesure sémantique.
            </p>
          </div>
        </div>
        
        <div className="home-footer">
          <p>
            Réaliser par BOUZLAFA Mounaim et MEZIANI Mohammed - M2I - 2025.
          </p>
        </div>
      </div>
    </div>
  );
};

// Composant Barre de Navigation
const Navbar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Accueil', icon: '🏠' },
    { id: 'paragraphs', label: 'Paragraphes', icon: '📄' },
    { id: 'dendrogram', label: 'Dendrogramme', icon: '🌳' },
    { id: 'matrice', label: 'Matrice de distances', icon: '🧮' },
    { id: 'docs', label: 'Documentation', icon: '🗂️' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="navbar-logo">📚</span>
          <span className="navbar-title">CAH</span>
        </div>
        
        <div className="navbar-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`nav-button ${activeTab === item.id ? 'active' : ''}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Composant Principal
function App() {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClassificationData()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // Fonction pour rendre le contenu en fonction de l'onglet actif
  const renderContent = () => {
    if (loading) {
      return (
        <div className="loading-container">
          <div className="loading-content">
            <div className="spinner"></div>
            <p className="loading-text">Chargement des données...</p>
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'home':
        return <HomePage />;
      
      case 'paragraphs':
        return (
          <div className="content-container">
            <div className="page-header">
              <h1 className="page-title">Liste des Paragraphes</h1>
              <p className="page-subtitle">Consultez les dix premiers paragraphes du livre, accompagnés de leurs métadonnées et de leurs classifications.</p>
            </div>
            <div className="paragraph-list">
              {data ? (
                <ParagraphList documents={data.documents} />
              ) : (
                <p className="error-message">Erreur lors du chargement des données</p>
              )}
            </div>
          </div>
        );
      
      case 'dendrogram':
        return (
          <div className="content-container-dendrogramme">
            <div className="page-header">
              <h1 className="page-title">Dendrogramme</h1>
              <p className="page-subtitle">Visualisez la hiérarchie et les relations entre les différentes parties du livre.</p>
            </div>
            <div className="dendrogram-container">
              <Dendrogram dendrogramme={data.dendrogramme}/>
            </div>
          </div>
        );
      
      case 'matrice':
        return (
          <div className="content-container-dendrogramme">
            <div className="page-header">
              <h1 className="page-title">Matrice de distances</h1>
              <p className="page-subtitle">Explorez en détail la matrice des distances, qui met en évidence les similitudes et différences entre les paragraphes du livre, en se basant sur une mesure sémantique.</p>
            </div>
            <div className="dendrogram-container">
              <DistanceMatrix matrice={data.matriceDistances}/>
            </div>
          </div>
        );
      
      case 'docs':
        return (
          <div className="content-container-dendrogramme">
            <div className="dendrogram-container">
              <DocumentationSection />
            </div>
          </div>
        );
      
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
}

export default App;