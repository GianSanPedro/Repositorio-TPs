export const favoritesService = {
    add: async (pokemon: { id: number; name: string; image: string }) => {
        const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pokemon),
        });

        if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Error al agregar favorito");
        }

        return res.json();
    },

    remove: async (id: number) => {
        const res = await fetch(`/api/favorites/${id}`, {
        method: "DELETE",
        });

        if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Error al eliminar favorito");
        }
    },
};
