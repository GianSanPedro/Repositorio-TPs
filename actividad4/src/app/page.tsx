import Saludo from "./components/Saludo";

import PokemonList from "./components/PokemonList";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
      <Saludo nombre="Cliente"/>

      {/* Nueva sección de Pokémons */}
      <section>
        <PokemonList />
      </section>

      <footer className="min-h-48 flex items-center justify-center">
        <h2 className="text-2xl font-semibold">CopyRights 2025</h2>
      </footer>
    </main>
  );
}
