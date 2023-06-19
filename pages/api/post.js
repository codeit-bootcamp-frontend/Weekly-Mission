import { connectDB } from "@/api/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.name == "") {
      return res.sendStatus(500);
    }
    try {
      let db = (await connectDB).db("linkbrary");
      let result = db.collection("folder").insertOne(req.body);
      res.status(200).json(result.ops[0]);
    } catch (error) {
      console.log(error);
    }
  }
}
