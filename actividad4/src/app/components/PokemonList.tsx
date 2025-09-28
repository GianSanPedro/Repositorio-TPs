"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem";

interface Pokemon {
  name: string;
  url: string;
}

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
        setPokemons(response.data.results);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) {
    return <p>Cargando Pokémons...</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Lista de Pokémons</h2>
      <ul className="space-y-2">
        {pokemons.map((pokemon) => (
          <PokemonItem key={pokemon.name} name={pokemon.name} />
        ))}
      </ul>
    </div>
  );
}
