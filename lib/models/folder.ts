import mongoose from "mongoose";
import { Schema } from "mongoose";

// const schemaOptions = {
//   timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
// };

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
  }
);

/*
const schemaOptions = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const mySchema = new Schema({ name: String }, schemaOptions);
*/

export const FolderModel =
  mongoose.models.Folder || mongoose.model("Folder", FolderSchema);

/*
      "name": "코딩 팁",
      "user_id": 1
 */
