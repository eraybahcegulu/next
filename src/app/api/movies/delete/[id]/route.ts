import Movie from "../../../../models/Movie"
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(req :NextRequest , { params }: { params: any }) {
    try {
      const { id } = params;
      await Movie.findByIdAndDelete(id);
      return NextResponse.json({ message: "Movie Deleted" }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  }