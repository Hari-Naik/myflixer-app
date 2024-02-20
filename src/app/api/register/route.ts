import { connectToDB } from "@/lib/connect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const { username, email, password } = await req.json();

    const isUserExist = await User.findOne({ $or: [{ username }, { email }] });
    if (isUserExist) {
      return NextResponse.json(
        { msg: "Username or email already exits." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });
    return NextResponse.json(
      { msg: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Error occured while registering the user." },
      { status: 500 }
    );
  }
}
