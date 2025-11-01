import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "database.json");

    export interface Favorite {
    id: number;
    name: string;
    image: string;
    createdAt: string;
    }

    class Database {
    private async readDB(): Promise<Favorite[]> {
        try {
        const data = await fs.readFile(DB_PATH, "utf-8");
        return JSON.parse(data);
        } catch {
        return [];
        }
    }

    private async writeDB(data: Favorite[]): Promise<void> {
        await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
    }

    async getAll(): Promise<Favorite[]> {
        return await this.readDB();
    }

    async create(favorite: Omit<Favorite, "createdAt">): Promise<Favorite | null> {
        const data = await this.readDB();
        const exists = data.find((f) => f.id === favorite.id);
        if (exists) return null; // conflicto (ya existe)

        const newFav: Favorite = { ...favorite, createdAt: new Date().toISOString() };
        data.push(newFav);
        await this.writeDB(data);
        return newFav;
    }

    async delete(id: number): Promise<boolean> {
        const data = await this.readDB();
        const filtered = data.filter((f) => f.id !== id);
        if (filtered.length === data.length) return false; // no encontrado
        await this.writeDB(filtered);
        return true;
    }
    }

export const db = new Database();
