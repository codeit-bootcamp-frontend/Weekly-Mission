import { connectDB } from "@/api/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.name == "") {
      return res.sendStatus(404);
    }
    try {
      let db = (await connectDB).db("linkbrary");
      let result = await db.collection("folder").insertOne(req.body);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ message: "실패" });
    }
  }
}
