import Serie from "../../../models/Serie";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        const series = await Serie.find();
        return NextResponse.json({ series });

    } catch (err) {
        console.error("Error fetching series:", err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};