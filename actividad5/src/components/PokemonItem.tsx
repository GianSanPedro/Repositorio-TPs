import Link from "next/link";

export default function PokemonItem({ name }: { name: string }) {
  return (
    <div
      style={{
        background: "#7d23c7ff",
        border: "1px solid #444",
        borderRadius: "10px",
        padding: "1rem",
        width: "140px",
        textAlign: "center",
        transition: "transform 0.2s, background 0.2s",
      }}
      onMouseEnter={(e) => ((e.currentTarget.style.background = "#642185ff"), (e.currentTarget.style.transform = "scale(1.05)"))}
      onMouseLeave={(e) => ((e.currentTarget.style.background = "#000000ff"), (e.currentTarget.style.transform = "scale(1)"))}
    >
      <Link href={`/pokemon/${name}`} style={{ color: "#fff", textDecoration: "none" }}>
        <strong>{name.charAt(0).toUpperCase() + name.slice(1)}</strong>
      </Link>
    </div>
  );
}


