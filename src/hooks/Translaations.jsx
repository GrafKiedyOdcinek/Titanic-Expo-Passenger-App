const translations = {
  EN: {
    "First Class": "1st",
    "Second Class": "2nd",
    "Third Class": "3rd",
    Staff: "Staff",
    Clear: "Clear",
    Search: "Search",
    "No result for this search": "No result for this search",
    NotFound: "Passenger not found",
    Bio: "Biography : ",
  },
  FR: {
    "First Class": "1ère",
    "Second Class": "2ème",
    "Third Class": "3ème",
    Staff: "Équipage",
    Clear: "Effacer",
    Search: "Rechercher",
    "No result for this search": "Pas de résultat pour cette recherche",
    NotFound: "Passager non trouvé",
    Bio: "Biographie : ",
  },
  IT: {
    "First Class": "1a",
    "Second Class": "2a",
    "Third Class": "3a",
    Staff: "Personale",
    Clear: "Cancella",
    Search: "Cerca",
    "No result for this search": "Nessun risultato per questa ricerca",
    NotFound: "Passeggero non trovato",
    Bio: "Biografia : ",
  },
  // Ajoutez d'autres langues ici
};

export const getTranslation = (key, language) => {
  return translations[language][key] || key;
};