"use client";

export default function LoadingList() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Cargando lista de Pokémon...</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={{
            width: "120px", height: "80px", background: "#222", borderRadius: "10px",
            animation: "pulse 1.5s infinite"
          }} />
        ))}
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
