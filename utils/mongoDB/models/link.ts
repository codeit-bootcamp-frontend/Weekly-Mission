import mongoose, { Schema } from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image_source: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    folder_id: [{ type: Schema.Types.ObjectId, ref: "Folder", required: true }],
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

export const LinkModel =
  mongoose.models.Link || mongoose.model("Link", LinkSchema);
