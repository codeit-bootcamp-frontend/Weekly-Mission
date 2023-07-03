import mongoose, { Schema } from "mongoose";

const FolderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    link_id: [{ type: Schema.Types.ObjectId, ref: "links", required: true }],
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  },
);

export const FolderModel =
  mongoose.models.Folder || mongoose.model("Folder", FolderSchema);
