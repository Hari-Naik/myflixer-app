import { connectToDB } from "@/lib/connect";
import Favourite from "@/models/Favourites";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const uid = req.nextUrl.searchParams.get("uid");
  try {
    await connectToDB();
    const favourites = await Favourite.find({ uid });
    return NextResponse.json(favourites, { status: 200 });
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const body = await req.json();
    const user = await User.findById(body.uid);

    if (!user) {
      return NextResponse.json(
        { msg: "Please login to use this feature." },
        { status: 400 }
      );
    }

    const isExists = await Favourite.find({
      uid: user._id,
      media_id: body.media_id,
    });

    if (isExists && isExists.length > 0) {
      return NextResponse.json(
        { msg: "Movie already exists in favorites." },
        { status: 400 }
      );
    }

    await Favourite.create({
      uid: user._id,
      media_id: body.media_id,
      poster_path: body.poster_path,
      title: body.title,
      overview: body.overview,
      release_date: body.release_date,
      vote_average: body.vote_average,
      type: body.type,
    });

    return NextResponse.json(
      { msg: "Movie added to favorites." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "Something went wrong" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const id = await req.nextUrl.searchParams.get("id");

  try {
    await connectToDB();
    await Favourite.findByIdAndDelete(id);
    return NextResponse.json(
      { msg: "Movie removed successfully" },
      { status: 201 }
    );
  } catch (error) {
    throw new Error("server Something went wrong");
  }
}
