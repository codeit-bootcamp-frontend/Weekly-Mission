import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {
  // getToken을 사용하면 session 데이터 가져올 수 있다.
  // 원래 jwt 토큰 생성할 때 secret 토큰을 넣어줬었다.
  const session = await getToken({ req, secret: process.env.JWT_SECRET });
  const pathname = req.nextUrl.pathname;

  // 로그인된 유저만 접근 가능
  // 경로는 /folder인데 session이 없다는 건 로그인되지 않았다는 의미
  if (pathname.startsWith("/folder") && !session) {
    return NextResponse.redirect(new URL("/api/auth/login", req.url));
  }

  // 로그인된 유저는 로그인, 회원가입 페이지에 접근 X
  if (pathname.startsWith("/api/auth") && session) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 위 경우가 전부 아닐 경우 : 통과시켜줘서 원하는 url로 갈 수 있게 해준다.
  return NextResponse.next();
}
