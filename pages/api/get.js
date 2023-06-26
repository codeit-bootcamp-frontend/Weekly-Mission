import { connectDB } from "@/api/database";

export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      let db = (await connectDB).db("linkbrary");
      let result = await db.collection("folder").find().toArray();
      result = result.map((a) => {
        a._id = a._id.toString();
        return a;
      });
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ message: "실패" });
    }
  }
}
