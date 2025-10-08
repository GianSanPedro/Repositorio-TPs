export async function getPokemons(limit: number, offset: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error("Error al obtener la lista de Pokemons");
  return res.json();
}

export async function getPokemonDetail(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error("Error al obtener el detalle del Pokemon");
  return res.json();
}
