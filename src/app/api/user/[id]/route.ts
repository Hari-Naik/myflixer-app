import { connectToDB } from "@/lib/connect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    const user = await User.findById(params.id);
    return NextResponse.json(
      {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "Something went wrong" }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDB();
    const body = await req.json();
    const hashedPassword = await bcrypt.hash(body?.newPassword, 10);
    await User.updateOne(
      { _id: params.id },
      { $set: { password: hashedPassword } }
    );

    return NextResponse.json(
      { masg: "Password has been updated successfully" },
      { status: 201 }
    );
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
