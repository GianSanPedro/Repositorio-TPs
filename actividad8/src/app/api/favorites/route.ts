    import { NextResponse } from "next/server";
    import { db } from "@/app/lib/database";

    export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (!body.id || !body.name || !body.image) {
        return NextResponse.json(
            { error: "Faltan campos obligatorios: id, name, image" },
            { status: 400 }
        );
        }

        const created = await db.create({
        id: body.id,
        name: body.name,
        image: body.image,
        });

        if (!created) {
        return NextResponse.json(
            { error: "El Pokémon ya está en favoritos" },
            { status: 409 }
        );
        }

        return NextResponse.json(created, { status: 201 });
    } catch {
        return NextResponse.json(
        { error: "Error al agregar favorito" },
        { status: 500 }
        );
    }
    }

    export async function GET() {
    try {
        const favorites = await db.getAll();
        return NextResponse.json(favorites, { status: 200 });
    } catch (error) {
        return NextResponse.json(
        { error: "Error al obtener favoritos" },
        { status: 500 }
        );
    }
    }
