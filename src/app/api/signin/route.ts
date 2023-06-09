import { getUserById } from "@/lib/api/userApi";
import UserIdMap from "@/app/data/user/userId";

interface ReqBody {
  username: string;
  password: string;
}

export const POST = async (req: Request) => {
  const body: ReqBody = await req.json();
  const userId = UserIdMap.indexOf(body.username) + 1;

  // TODO: 실제 db에서 body 정보와 매칭되는 회원 정보 확인 로직 필요
  if (body.password === "123qwe" && userId > 0) {
    const res = await getUserById(userId);
    return new Response(JSON.stringify(res));
  } else return new Response(JSON.stringify(null));
};
