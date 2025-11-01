import { getPokemonDetail } from "@/app/services/pokemonService";
import Link from "next/link";

export default async function PokemonDetail({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const pokemon = await getPokemonDetail(name);

  const types = pokemon.types.map((t: any) => t.type.name).join(", ");
  const abilities = pokemon.abilities.map((a: any) => a.ability.name).join(", ");

  return (
    <div className="flex flex-col items-center text-white min-h-screen py-10 px-4 bg-transparent">
      <h1 className="text-4xl font-bold mb-6 text-[var(--accent)] drop-shadow-[0_0_8px_var(--accent)]">
        {pokemon.name.toUpperCase()}
      </h1>

      <img
        src={
          pokemon.sprites.other["official-artwork"].front_default ||
          pokemon.sprites.front_default
        }
        alt={pokemon.name}
        width={250}
        height={250}
        className="mb-6 drop-shadow-lg"
      />

      <div className="bg-[#111] border border-[#444] rounded-xl p-6 w-[320px] text-left shadow-lg">
        <p><strong>Tipo:</strong> {types}</p>
        <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
        <p><strong>Habilidades:</strong> {abilities}</p>
        <p><strong>Experiencia base:</strong> {pokemon.base_experience}</p>
        <p className="mt-3"><strong>Estadísticas:</strong></p>
        <ul className="list-none pl-0 mt-1">
          {pokemon.stats.map((s: any) => (
            <li key={s.stat.name} className="capitalize">
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>
      </div>

      <Link href="/" className="mt-6 text-[var(--link)] hover:underline hover:text-[var(--accent)] transition-colors">
        Volver a la lista
      </Link>
    </div>
  );
}




