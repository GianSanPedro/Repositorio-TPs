"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { favoritesService } from "@/app/services/favorites.service";

export function useFavorites() {
    return useQuery({
        queryKey: ["favorites"],
        queryFn: async () => {
        const res = await fetch("/api/favorites");
        if (!res.ok) throw new Error("Error al obtener favoritos");
        return res.json();
        },
    });
}

export function useAddFavorite() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: favoritesService.add,
        onSuccess: () => qc.invalidateQueries({ queryKey: ["favorites"] }),
    });
}

export function useRemoveFavorite() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: favoritesService.remove,
        onSuccess: () => qc.invalidateQueries({ queryKey: ["favorites"] }),
    });
}
