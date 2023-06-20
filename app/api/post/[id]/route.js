import { NextResponse } from "next/server";

//GET 요청
export async function GET(req, { params: { id } }) {
  const post = [
    {
      id: 1,
      title: "1111",
    },
    {
      id: 2,
      title: "2222",
    },
  ];
  let postid = post.filter((i) => i.id === +id);
  return NextResponse.json(postid);
}

// export async function POST() {
//   return NextResponse.json("post 요청");
// }
