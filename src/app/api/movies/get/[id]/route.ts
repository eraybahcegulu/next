import Movie from "../../../../models/Movie"
import { NextResponse, NextRequest } from "next/server";

export async function GET(req :NextRequest , { params }: { params: any }) {
    try {
      const { id } = params;
      const movie = await Movie.findById(id);
      return NextResponse.json({ movie });
    } catch (error) {
      console.log(error);
    }
  }