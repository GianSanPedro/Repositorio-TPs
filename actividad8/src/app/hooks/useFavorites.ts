"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const FAVORITES_KEY = "favorites";

function getStoredFavorites() {
    if (typeof window === "undefined") return [];
    try {
        return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    } catch {
        return [];
    }
}

function setStoredFavorites(favs: any[]) {
    if (typeof window !== "undefined") {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
    }
}

export function useFavorites() {
    return useQuery({
        queryKey: [FAVORITES_KEY],
        queryFn: async () => getStoredFavorites(),
        staleTime: Infinity,
    });
}

export function useAddFavorite() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (pokemon: {
        id: number;
        name: string;
        image: string;
        nombre?: string;
        descripcion?: string;
        }) => {
        const oldFavs = getStoredFavorites();

        const alreadyExists = oldFavs.some((f: any) => f.id === pokemon.id);
        if (alreadyExists) return oldFavs;

        const newFavs = [...oldFavs, pokemon];
        setStoredFavorites(newFavs);
        return newFavs;
        },
        onSuccess: (data) => {
        queryClient.setQueryData([FAVORITES_KEY], data);
        },
    });
}

export function useRemoveFavorite() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => {
        const oldFavs = getStoredFavorites();
        const newFavs = oldFavs.filter((f: any) => f.id !== id);
        setStoredFavorites(newFavs);
        return newFavs;
        },
        onSuccess: (data) => {
        queryClient.setQueryData([FAVORITES_KEY], data);
        },
    });
}

