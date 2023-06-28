import mongoose from "mongoose";
import { Schema } from "mongoose";

const FolderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    links: [{ type: Schema.Types.ObjectId, ref: "links", required: true }],
  },
  { timestamps: true, versionKey: false }
);

export const FolderModel =
  mongoose.models.Folder || mongoose.model("Folder", FolderSchema);

/*
      "name": "코딩 팁",
      "user_id": 1
 */
