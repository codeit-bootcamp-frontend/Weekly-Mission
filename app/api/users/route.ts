import { NextRequest, NextResponse } from "next/server";

import dbConnect from "@/utils/mongoDB/dbConnect";
import { UserModel } from "@/utils/mongoDB/models/user";

export async function GET() {
  await dbConnect();
  const users = await UserModel.find();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const user = await UserModel.create(body);

  return NextResponse.json(user);
}
