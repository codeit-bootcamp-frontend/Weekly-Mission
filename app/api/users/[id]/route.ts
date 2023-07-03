import { NextRequest, NextResponse } from "next/server";

import dbConnect from "@/utils/mongoDB/dbConnect";
import { UserModel } from "@/utils/mongoDB/models/user";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnect();
  const user = await UserModel.findById(params.id);
  return NextResponse.json(user);
}
