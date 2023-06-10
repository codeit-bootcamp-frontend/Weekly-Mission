import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: "secret",
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize(
        credentials,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        req
      ) {
        // Perform database operations

        try {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };

          /**
           * @description 임시로 설정한 유저 정보입니다.
           */
          const user = {
            id: Number(password), // 임시로 비밀번호가 id가 되도록 설정
            created_at: "2023-06-04T13:03:01+00:00",
            name: "코드잇",
            image_source:
              "https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png",
            email: "codeit@codeit.com",
            password: new Array(10)
              .fill(null)
              .map((elem, index) => String(index + 1)),
          };

          if (email === user.email && user.password.includes(password)) {
            return {
              id: user.id,
              name: user.name,
              image_source: user.image_source,
              email: user.email,
            } as any;
          }

          return null;
        } catch (e) {
          console.log(e);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      /**
       * "user" parameter is the object received from "authorize"
       * "token" is being send below to "session" callback...
       * authorize에 리턴했던 값이 user 정보에 있면 token에 추가
       */
      user && (token.user = user);
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      /**
       * "session" is current session object
       * below we set "user" param of "session" to value received from "jwt" callback
       * token에 포함된 user 정보를 session.user에도 추가
       * 이후 client side의 session.user에서 token.user 정보 확인 가능
       */
      session.user = token.user;
      if (session.user != null && token.hasAcceptedTerms != null) {
        session.user.hasAcceptedTerms = token?.hasAcceptedTerms;
      }
      return Promise.resolve(session);
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
