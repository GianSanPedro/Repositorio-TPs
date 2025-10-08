import PokemonItem from "./PokemonItem";

export default function PokemonList({ pokemons }: { pokemons: any[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "1rem",
        justifyItems: "center",
        maxWidth: "900px",
        margin: "0 auto",
        paddingBottom: "2rem",
      }}
    >
      {pokemons.map((p) => (
        <PokemonItem key={p.name} name={p.name} />
      ))}
    </div>
  );
}
