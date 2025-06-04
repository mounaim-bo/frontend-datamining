import React, { useState } from "react";
import "./styles/DocumentationSection.css";

const DocumentationSection = () => {
  const [activeSection, setActiveSection] = useState('cah');

  const documentationSections = [
    { id: 'cah', title: 'Classification Hiérarchique', icon: '🌳' },
    { id: 'semantic', title: 'Approche Sémantique', icon: '🧠' },
    { id: 'matrix', title: 'Matrice de Distance', icon: '🧮' },
    { id: 'cosine', title: 'Distance Cosinus', icon: '📐' },
    { id: 'tfidf', title: 'TF-IDF', icon: '🔍' }
  ];

  return (
    <div className="documentation-section">
      <div className="documentation-header">
        <h2 className="documentation-title">
          <span className="title-icon">📖</span>
          Documentation Technique
        </h2>
        <p className="documentation-subtitle">
          Comprendre les concepts et méthodes utilisées dans l'analyse
        </p>
      </div>

      <div className="documentation-content">
        {/* Navigation des sections */}
        <div className="doc-navigation">
          {documentationSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`doc-nav-button ${activeSection === section.id ? 'active' : ''}`}
            >
              <span className="doc-nav-icon">{section.icon}</span>
              <span className="doc-nav-text">{section.title}</span>
            </button>
          ))}
        </div>

        {/* Contenu des sections */}
        <div className="doc-content">
          {activeSection === 'cah' && (
            <div className="doc-section">
              <h3 className="section-title">Classification Hiérarchique Ascendante (CAH)</h3>
              
              <div className="concept-card">
                <h4>🎯 Définition</h4>
                <p>
                  La Classification Hiérarchique Ascendante est une méthode d'analyse de données qui 
                  construit progressivement une hiérarchie de groupes en fusionnant itérativement 
                  les éléments les plus similaires.
                </p>
              </div>

              <div className="concept-card">
                <h4>⚙️ Principe de fonctionnement</h4>
                <div className="process-steps">
                  <div className="step">
                    <span className="step-number">1</span>
                    <p>Chaque élément forme initialement son propre cluster</p>
                  </div>
                  <div className="step">
                    <span className="step-number">2</span>
                    <p>Calcul des distances entre tous les pairs d'éléments</p>
                  </div>
                  <div className="step">
                    <span className="step-number">3</span>
                    <p>Fusion des deux éléments les plus proches</p>
                  </div>
                  <div className="step">
                    <span className="step-number">4</span>
                    <p>Répétition jusqu'à obtenir un seul cluster</p>
                  </div>
                </div>
              </div>

              <div className="concept-card">
                <h4>📊 Avantages</h4>
                <ul className="advantages-list">
                  <li>Visualisation claire des relations hiérarchiques</li>
                  <li>Pas besoin de spécifier le nombre de clusters à l'avance</li>
                  <li>Permet de choisir le niveau de granularité désiré</li>
                  <li>Adapté aux données textuelles et sémantiques</li>
                </ul>
              </div>
            </div>
          )}

          {activeSection === 'semantic' && (
            <div className="doc-section">
              <h3 className="section-title">Approche Sémantique</h3>
              
              <div className="concept-card">
                <h4>🧠 Qu'est-ce que l'approche sémantique ?</h4>
                <p>
                  L'approche sémantique analyse le <strong>sens</strong> et la <strong>signification</strong> 
                  des textes plutôt que leur simple structure syntaxique. Elle permet de comprendre 
                  les relations conceptuelles entre les documents.
                </p>
              </div>

              <div className="concept-card">
                <h4>🔄 Processus d'analyse sémantique</h4>
                <div className="semantic-flow">
                  <div className="flow-item">
                    <span className="flow-icon">📝</span>
                    <h5>Prétraitement</h5>
                    <p>Nettoyage, tokenisation, suppression des mots vides</p>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-item">
                    <span className="flow-icon">🔢</span>
                    <h5>Vectorisation</h5>
                    <p>Transformation du texte en vecteurs numériques (TF-IDF)</p>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-item">
                    <span className="flow-icon">📊</span>
                    <h5>Similarité</h5>
                    <p>Calcul des distances sémantiques entre documents</p>
                  </div>
                </div>
              </div>

              <div className="concept-card">
                <h4>🎯 Applications</h4>
                <div className="applications-grid">
                  <div className="app-item">
                    <span>📚</span>
                    <p>Classification de documents</p>
                  </div>
                  <div className="app-item">
                    <span>🔍</span>
                    <p>Recherche sémantique</p>
                  </div>
                  <div className="app-item">
                    <span>📝</span>
                    <p>Résumé automatique</p>
                  </div>
                  <div className="app-item">
                    <span>🤖</span>
                    <p>Chatbots intelligents</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'matrix' && (
            <div className="doc-section">
              <h3 className="section-title">Matrice de Distance</h3>
              
              <div className="concept-card">
                <h4>🧮 Définition</h4>
                <p>
                  Une matrice de distance est un tableau carré qui stocke les distances calculées 
                  entre chaque paire d'éléments dans un ensemble de données. Elle est symétrique 
                  et sa diagonale contient des zéros.
                </p>
              </div>

              <div className="concept-card">
                <h4>📐 Structure</h4>
                <div className="matrix-example">
                  <div className="matrix-visual">
                    <table className="distance-table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Doc1</th>
                          <th>Doc2</th>
                          <th>Doc3</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Doc1</strong></td>
                          <td className="diagonal">0</td>
                          <td>0.65</td>
                          <td>0.82</td>
                        </tr>
                        <tr>
                          <td><strong>Doc2</strong></td>
                          <td>0.65</td>
                          <td className="diagonal">0</td>
                          <td>0.71</td>
                        </tr>
                        <tr>
                          <td><strong>Doc3</strong></td>
                          <td>0.82</td>
                          <td>0.71</td>
                          <td className="diagonal">0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="matrix-properties">
                    <div className="property">
                      <span className="property-icon">🔄</span>
                      <p><strong>Symétrique :</strong> distance(A,B) = distance(B,A)</p>
                    </div>
                    <div className="property">
                      <span className="property-icon">⭕</span>
                      <p><strong>Diagonale nulle :</strong> distance(A,A) = 0</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="concept-card">
                <h4>💡 Utilisation en CAH</h4>
                <p>
                  La matrice de distance guide le processus de clustering en identifiant 
                  à chaque étape les éléments les plus proches à fusionner. Elle est 
                  mise à jour après chaque fusion.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'cosine' && (
            <div className="doc-section">
              <h3 className="section-title">Distance Cosinus</h3>
              
              <div className="concept-card">
                <h4>📐 Principe</h4>
                <p>
                  La distance cosinus mesure l'angle entre deux vecteurs dans un espace 
                  multidimensionnel. Elle est particulièrement adaptée pour comparer 
                  des documents textuels représentés sous forme de vecteurs.
                </p>
              </div>

              <div className="concept-card">
                <h4>🧮 Formule mathématique</h4>
                <div className="formula-container">
                  <div className="formula">
                    <p className="formula-title">Similarité Cosinus :</p>
                    <div className="formula-math">
                      cos(θ) = (A · B) / (||A|| × ||B||)
                    </div>
                  </div>
                  <div className="formula">
                    <p className="formula-title">Distance Cosinus :</p>
                    <div className="formula-math">
                      distance = 1 - cos(θ)
                    </div>
                  </div>
                </div>
              </div>

              <div className="concept-card">
                <h4>📊 Interprétation</h4>
                <div className="interpretation-scale">
                  <div className="scale-item">
                    <span className="scale-value">0</span>
                    <span className="scale-desc">Identiques</span>
                    <div className="scale-bar" style={{background: '#22c55e', width: '100%'}}></div>
                  </div>
                  <div className="scale-item">
                    <span className="scale-value">0.5</span>
                    <span className="scale-desc">Moyennement similaires</span>
                    <div className="scale-bar" style={{background: '#eab308', width: '50%'}}></div>
                  </div>
                  <div className="scale-item">
                    <span className="scale-value">1</span>
                    <span className="scale-desc">Complètement différents</span>
                    <div className="scale-bar" style={{background: '#ef4444', width: '10%'}}></div>
                  </div>
                </div>
              </div>

              <div className="concept-card">
                <h4>✅ Avantages pour le texte</h4>
                <ul className="advantages-list">
                  <li>Insensible à la longueur des documents</li>
                  <li>Focus sur les proportions relatives des termes</li>
                  <li>Efficace pour les données parses (beaucoup de zéros)</li>
                  <li>Intuitive pour la similarité sémantique</li>
                </ul>
              </div>
            </div>
          )}

          {activeSection === 'tfidf' && (
            <div className="doc-section">
              <h3 className="section-title">TF-IDF (Term Frequency - Inverse Document Frequency)</h3>
              
              <div className="concept-card">
                <h4>🔍 Objectif</h4>
                <p>
                  TF-IDF évalue l'importance d'un terme dans un document par rapport à 
                  une collection de documents. Il permet d'identifier les mots les plus 
                  caractéristiques de chaque document.
                </p>
              </div>

              <div className="concept-card">
                <h4>🧮 Composantes</h4>
                <div className="tfidf-components">
                  <div className="component">
                    <h5>📊 TF (Term Frequency)</h5>
                    <p>Fréquence d'apparition d'un terme dans le document</p>
                    <div className="formula-small">
                      TF = (nombre d'occurrences du terme) / (nombre total de termes)
                    </div>
                  </div>
                  <div className="component">
                    <h5>📈 IDF (Inverse Document Frequency)</h5>
                    <p>Inverse de la fréquence du terme dans la collection</p>
                    <div className="formula-small">
                      IDF = log(nombre total de documents / nombre de documents contenant le terme)
                    </div>
                  </div>
                </div>
              </div>

              <div className="concept-card">
                <h4>🎯 Formule finale</h4>
                <div className="final-formula">
                  <div className="formula-big">
                    TF-IDF = TF × IDF
                  </div>
                  <p className="formula-explanation">
                    Un score élevé indique qu'un terme est fréquent dans le document 
                    mais rare dans la collection globale, le rendant discriminant.
                  </p>
                </div>
              </div>

              <div className="concept-card">
                <h4>💡 Exemple pratique</h4>
                <div className="example-container">
                  <div className="example-scenario">
                    <h5>Scénario :</h5>
                    <p>Le mot "machine" apparaît 5 fois dans un document de 100 mots, 
                    et seulement dans 2 documents sur 1000 de la collection.</p>
                  </div>
                  <div className="example-calculation">
                    <div className="calc-step">
                      <span>TF = 5/100 = 0.05</span>
                    </div>
                    <div className="calc-step">
                      <span>IDF = log(1000/2) = 2.7</span>
                    </div>
                    <div className="calc-result">
                      <span>TF-IDF = 0.05 × 2.7 = 0.135</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="concept-card">
                <h4>🚀 Avantages</h4>
                <ul className="advantages-list">
                  <li>Réduit l'impact des mots très fréquents (articles, prépositions)</li>
                  <li>Met en valeur les termes spécifiques à chaque document</li>
                  <li>Base solide pour la classification et la recherche</li>
                  <li>Standard de l'industrie pour l'analyse textuelle</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentationSection;