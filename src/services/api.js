import axios from "axios";

export const fetchClassificationData = async () => {
  const response = await fetch('http://localhost:8080/api/classification/dendrogramme-monde-mer');
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }
  return await response.json();
};
