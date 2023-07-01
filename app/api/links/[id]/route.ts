import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConnect";
import { UserModel } from "@/lib/models/user";
import { LinkModel } from "@/lib/models/link";
import { FolderModel } from "@/lib/models/folder";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const folderId = searchParams.get("folderId") || undefined;

  if (folderId) {
    await Promise.all([
      LinkModel.findByIdAndUpdate(params.id, {
        $pull: { folder_id: folderId },
      }),
      FolderModel.findByIdAndUpdate(folderId, {
        $pull: { link_id: params.id },
      }),
    ]);
  } else
    await Promise.all([
      LinkModel.findByIdAndDelete(params.id),
      FolderModel.updateMany({}, { $pull: { link_id: params.id } }),
    ]);
  return NextResponse.json(null);
}
