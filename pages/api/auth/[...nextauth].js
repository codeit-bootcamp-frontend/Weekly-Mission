import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'c37846b646eb768018f2',
      clientSecret: '2bb2f9aa0bd83885299229151ac308e2ec0130c6',
    }),
  ],
  secret : "1234"
}

export default NextAuth(authOptions)
