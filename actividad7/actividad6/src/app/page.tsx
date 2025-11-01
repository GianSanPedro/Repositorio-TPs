import "./globals.css";
import PokemonList from "./components/PokemonList";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-5xl font-bold text-[var(--accent)] mb-10 drop-shadow-[0_0_8px_var(--accent)]">
        Pokédex
      </h1>

      <PokemonList />

    </section>
  );
}





