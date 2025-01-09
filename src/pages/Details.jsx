import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../api";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemonDetails = async () => {
      const data = await fetchPokemonDetails(id);
      setPokemon(data);
    };

    getPokemonDetails();
  }, [id]);

  if (!pokemon) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Taille : {pokemon.height}</p>
      <p>Poids : {pokemon.weight}</p>
    </div>
  );
};

export default Details;
