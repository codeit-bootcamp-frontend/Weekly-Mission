import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "c37846b646eb768018f2",
      clientSecret: "22cca44fa3ac2a919b41190e8161081cd0ad907f",
    }),
  ],
  secret: "qwer1234",
}

export default NextAuth(authOptions)
