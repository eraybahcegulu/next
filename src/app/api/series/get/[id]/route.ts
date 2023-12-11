import Serie from "../../../../models/Serie"
import { NextResponse, NextRequest } from "next/server";

export async function GET(req :NextRequest , { params }: { params: any }) {
    try {
      const { id } = params;
      const serie = await Serie.findById(id);
      return NextResponse.json({ serie });
    } catch (error) {
      console.log(error);
    }
  }