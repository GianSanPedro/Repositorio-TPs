"use client";

import { useFavorites } from "@/app/hooks/useFavorites";
import PokemonItem from "@/app/components/PokemonItem";

export default function FavoritesPage() {
    const { data: favorites, isLoading, isError } = useFavorites();

    if (isLoading) return <p className="text-center mt-10">Cargando favoritos...</p>;
    if (isError) return <p className="text-center text-red-400 mt-10">Error al cargar favoritos 😢</p>;
    if (!favorites?.length) return <p className="text-center mt-10">No hay favoritos aún.</p>;

    return (
        <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-bold mb-6 text-yellow-400">⭐ Favoritos ⭐</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
            {favorites.map((p: any) => (
            <PokemonItem key={p.id} id={p.id} name={p.name} image={p.image} />
            ))}
        </div>
        </div>
    );
}
