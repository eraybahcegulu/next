import Movie from "../../../models/Movie";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        const movies = await Movie.find();
        return NextResponse.json({ movies });

    } catch (err) {
        console.error("Error fetching movies:", err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};