import mongoose from "mongoose";
import { Schema } from "mongoose";

const FolderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: false },
    links: [{ type: Schema.Types.ObjectId, ref: "links" }],
  },
  { timestamps: true, versionKey: false }
);

export const FolderModel =
  mongoose.models.Folder || mongoose.model("Folder", FolderSchema);

/*
  name: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  boards: [{ type: Schema.Types.ObjectId, ref: 'Board' }]
  */
