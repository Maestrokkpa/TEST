import React, { useEffect, useState } from "react";
import { fetchPokemonList } from "../api";
import { Link } from "react-router-dom";

function List () {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const data = await fetchPokemonList();
      setPokemon(data);
    };

    getPokemon();
  }, []);

  return (
    <div>
      <h1>Liste des Pokémon</h1>
      {console.log(pokemon)}
      <ul>
  {pokemon.map((p, index) => (
    <div className="card" key={index}>
      <h3>{p.name}</h3>
      <Link to={`/details/${index + 1}`}>Voir détails</Link>
    </div>
  ))}
</ul>

    </div>
  );
};

export default List;
