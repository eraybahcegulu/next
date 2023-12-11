import Serie from '../../../models/Serie'
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        await Serie.create(body);
        return NextResponse.json({ message: "Serie Created" }, { status: 201 });
    } catch (err) {
        console.log(err);
    }
};