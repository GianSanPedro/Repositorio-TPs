"use client";

import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../services/pokemonService";

export function usePokemons(limit: number, offset: number) {
  return useQuery({
    queryKey: ["pokemons", limit, offset],
    queryFn: () => getPokemons(limit, offset),
    keepPreviousData: true, // mantiene cache entre paginas
  });
}
