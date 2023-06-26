import mongoose from "mongoose";
import { Schema } from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    isFavorite: [{ type: Schema.Types.ObjectId, ref: "User" }],
    folders: [{ type: Schema.Types.ObjectId, ref: "Folder" }],
  },
  { timestamps: true, versionKey: false }
);

export const LinkModel =
  mongoose.models.Link || mongoose.model("Link", LinkSchema);

/*
   title: { type: String, required: true },
  content: { type: String },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  isFavorite: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  folders: [{ type: Schema.Types.ObjectId, ref: 'Folder' }]
  */
