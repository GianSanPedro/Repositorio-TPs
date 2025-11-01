import { NextResponse } from "next/server";
import { db } from "@/app/lib/database";

export async function DELETE(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
    const { id } = await context.params;
    const numericId = parseInt(id);

    if (isNaN(numericId)) {
        return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const deleted = await db.delete(numericId);

    if (!deleted) {
        return NextResponse.json(
        { error: "Pokémon no encontrado" },
        { status: 404 }
        );
    }

    return NextResponse.json(
        { message: "Pokémon eliminado de favoritos" },
        { status: 200 }
    );
    } catch (error) {
    console.error("Error al eliminar Pokémon:", error);
    return NextResponse.json(
        { error: "Error al eliminar Pokémon" },
        { status: 500 }
    );
    }
}
