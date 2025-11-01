"use client";

import { useFavorites, useRemoveFavorite } from "@/app/hooks/useFavorites";
import Link from "next/link";

export default function FavoritosPage() {
    const { data: favorites, isLoading } = useFavorites();
    const delFav = useRemoveFavorite();

    if (isLoading) {
        return (
        <p style={{ color: "#fff", textAlign: "center", marginTop: "2rem" }}>
            Cargando favoritos...
        </p>
        );
    }

    if (!favorites || favorites.length === 0) {
        return (
        <p style={{ color: "#fff", textAlign: "center", marginTop: "2rem" }}>
            No tenes Pokémon favoritos
        </p>
        );
    }

    return (
        <div
        style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            padding: "2rem",
        }}
        >
        {favorites.map((f: any) => (
            <div
            key={f.id}
            style={{
                background: "#7d23c7ff",
                border: "1px solid #444",
                borderRadius: "10px",
                padding: "1rem",
                width: "160px",
                textAlign: "center",
                color: "#fff",
                transition: "transform 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = "#642185ff";
                e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "#000000ff";
                e.currentTarget.style.transform = "scale(1)";
            }}
            >
            <Link
                href={`/pokemon/${f.name}`}
                style={{ color: "#fff", textDecoration: "none" }}
            >
                <img
                src={f.image}
                alt={f.name}
                style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    marginBottom: "0.5rem",
                }}
                />
                <strong>{f.name.charAt(0).toUpperCase() + f.name.slice(1)}</strong>
            </Link>

            {/* Datos agregados en el modal */}
            {f.nombre && (
                <p
                style={{
                    fontWeight: "bold",
                    marginTop: "0.4rem",
                    color: "#ffd166",
                }}
                >
                {f.nombre}
                </p>
            )}
            {f.descripcion && (
                <p
                style={{
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                    color: "#ddd",
                    marginTop: "0.2rem",
                }}
                >
                {f.descripcion}
                </p>
            )}

            <button
                onClick={() => delFav.mutate(f.id)}
                disabled={delFav.isPending}
                style={{
                marginTop: "0.6rem",
                background: "#e63946",
                border: "none",
                borderRadius: "6px",
                color: "#fff",
                padding: "0.3rem 0.6rem",
                cursor: "pointer",
                transition: "background 0.2s",
                }}
            >
                {delFav.isPending ? "..." : "Quitar"}
            </button>

            {delFav.isError && (
                <p style={{ color: "red", fontSize: "0.8rem" }}>
                Error: {delFav.error?.message}
                </p>
            )}
            </div>
        ))}
        </div>
    );
}
