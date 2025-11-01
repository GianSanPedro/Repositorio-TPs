"use client";

import Link from "next/link";
import { useAddFavorite, useRemoveFavorite, useFavorites } from "@/app/hooks/useFavorites";

interface PokemonItemProps {
  name: string;
  id: number;
  image: string;
}

export default function PokemonItem({ name, id, image }: PokemonItemProps) {
  const { data: favorites } = useFavorites();
  const addFav = useAddFavorite();
  const delFav = useRemoveFavorite();

  const isFavorite = favorites?.some((f: any) => f.id === id);
  const isLoading = addFav.isPending || delFav.isPending;

  const handleToggleFavorite = () => {
    if (isFavorite) delFav.mutate(id);
    else addFav.mutate({ id, name, image });
  };

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
        href={`/pokemon/${name}`}
        style={{ color: "#fff", textDecoration: "none" }}
      >
        <img
          src={image}
          alt={name}
          style={{ width: "80px", height: "80px", objectFit: "contain" }}
        />
        <strong>{name.charAt(0).toUpperCase() + name.slice(1)}</strong>
      </Link>

      <div style={{ marginTop: "0.5rem" }}>
        <button
          onClick={handleToggleFavorite}
          disabled={isLoading}
          style={{
            background: isFavorite ? "#e63946" : "#555",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "0.3rem 0.6rem",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          {isLoading
            ? "..."
            : isFavorite
            ? "❤️ Quitar"
            : "🤍 Fav"}
        </button>
      </div>

      {(addFav.isError || delFav.isError) && (
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          Error: {addFav.error?.message || delFav.error?.message}
        </p>
      )}
    </div>
  );
}


