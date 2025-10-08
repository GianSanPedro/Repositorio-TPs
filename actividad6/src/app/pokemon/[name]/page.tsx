import axios from "axios";
import Link from "next/link";

export default async function PokemonDetail({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params; // 👈 ahora sí lo esperás

  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = res.data;

  const types = data.types.map((t: any) => t.type.name).join(", ");
  const abilities = data.abilities.map((a: any) => a.ability.name).join(", ");

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#ffcb05" }}>
        {data.name.toUpperCase()}
      </h1>

      <img
        src={data.sprites.other["official-artwork"].front_default || data.sprites.front_default}
        alt={data.name}
        width={200}
        height={200}
        style={{ marginBottom: "1rem" }}
      />

      <div
        style={{
          background: "#111",
          border: "1px solid #444",
          borderRadius: "12px",
          padding: "1.5rem",
          width: "320px",
          textAlign: "left",
        }}
      >
        <p><strong>Tipo:</strong> {types}</p>
        <p><strong>Altura:</strong> {data.height / 10} m</p>
        <p><strong>Peso:</strong> {data.weight / 10} kg</p>
        <p><strong>Habilidades:</strong> {abilities}</p>
        <p><strong>Experiencia base:</strong> {data.base_experience}</p>
        <p><strong>Estadísticas:</strong></p>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "0.5rem" }}>
          {data.stats.map((s: any) => (
            <li key={s.stat.name}>
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>
      </div>

      <Link href="/" style={{ marginTop: "1.5rem", color: "#4fc3f7" }}>
        ← Volver a la lista
      </Link>
    </div>
  );
}

