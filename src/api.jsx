import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

// Fonction pour récupérer une liste d'éléments (par exemple : Pokémon)
export const fetchPokemonList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=20`);
    return response.data.results;
  } catch (error) {
    console.error("Erreur lors de la récupération des Pokémon :", error);
    return [];
  }
};

// Fonction pour récupérer les détails d'un élément
export const fetchPokemonDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des détails :", error);
    return null;
  }
};
