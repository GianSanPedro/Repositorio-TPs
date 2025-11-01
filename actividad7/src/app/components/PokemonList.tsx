"use client";

import { useState } from "react";
import { usePokemons } from "../hooks/usePokemons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PokemonItem from "./PokemonItem";
import BotonCargarMas from "./BotonCargarMas";

export default function PokemonList() {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isError } = usePokemons(limit, offset);

  if (isLoading)
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Skeleton count={8} height={150} baseColor="#1a1a1a" highlightColor="#2a2a2a" />
      </div>
    );

  if (isError)
    return <p className="text-center text-red-400 mt-10">Error al cargar los Pokémons 😢</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {data.results.map((p: any) => {
          const id = parseInt(p.url.split("/")[6]); 
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <PokemonItem
              key={id}
              id={id}      
              name={p.name}
              image={image}
            />
          );
        })}
      </div>

      <BotonCargarMas
        onClick={() => setLimit(limit + 10)}
        loading={isLoading}
      />
    </div>
  );
}

