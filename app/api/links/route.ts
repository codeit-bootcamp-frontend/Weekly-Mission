import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConnect";
import { FolderModel } from "@/lib/models/folder";
import { LinkModel } from "@/lib/models/link";
import { OpenGraphScraperOptions } from "open-graph-scraper/dist/lib/types";

export async function GET(req: NextRequest) {
  await dbConnect();
  const links = await LinkModel.find();
  return NextResponse.json(links);
}

export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect();
  const body = await req.json();

  const ogs = require("open-graph-scraper");
  const options = { url: body.url };
  const { result } = await ogs(options);

  if (result) {
    body.title = result.ogTitle || null;
    body.description = result.ogDescription || null;
    body.imageSource = result.ogImage ? result.ogImage[0].url : null;
  }

  let link = await LinkModel.findOne({ url: body.url, userId: body.userId });

  if (body.folderId && link) {
    if (!link.folderId.includes(body.folderId)) {
      await Promise.all([
        LinkModel.findByIdAndUpdate(link._id, {
          $push: { folderId: body.folderId },
        }),
        FolderModel.findByIdAndUpdate(body.folderId, {
          $push: { linkId: link._id },
        }),
      ]);
    } else return NextResponse.json({ message: "이미 추가된 링크입니다" });
  } else if (body.folderId && !link) {
    let newLink = await LinkModel.create(body);
    await FolderModel.findByIdAndUpdate(body.folderId, {
      $push: { linkId: newLink._id },
    });
  } else if (!body.folderId && !link) {
    await LinkModel.create(body);
  } else return NextResponse.json({ message: "이미 추가된 링크입니다" });

  return NextResponse.json(body);
}

/*
   1. folderId값 O 
    - 기존 link있을떄: 
        (1) folderId 중복: pass
        (2) folderId 없음: folderId에 id값 추가, folderModel에 해당 link추가 
    - 기존 link없을때: link추가, folderModel에 해당 link추가 (?)

   2. folderId 값 X 
    - 기존 link있을때: pass
    - 기존 link없을때: link에 추가 +
  */
