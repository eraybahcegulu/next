import Movie from '../../../models/Movie'
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        await Movie.create(body);
        return NextResponse.json({ message: "Movie Created" }, { status: 201 });
    } catch (err) {
        console.log(err);
    }
};