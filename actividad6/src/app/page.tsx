"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonList from "@/components/PokemonList";

export default function HomePage() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemons() {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0");
      setPokemons(res.data.results);
      setLoading(false);
    }
    fetchPokemons();
  }, []);

  if (loading) 
    return <p style={{ textAlign: "center" }}>Cargando lista...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", margin: "1rem 0", color: "#ffcb05" }}>Pokémon List</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}


