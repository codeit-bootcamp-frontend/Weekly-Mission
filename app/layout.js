import Gnb from "@/components/Gnb/Gnb";
import "../styles/global.css";
import { getUser } from "../api/axios";
import { SessionProvider } from "next-auth/react"

// export default async function RootLayout({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   let isLoggedin = false;
//   const USERID = "7";
//   let user = isLoggedin ? await getUser(USERID) : null;

//   return (
//     <html lang="ko">
//       <body>
//         <SessionProvider session={session}>
//           <Gnb user={user}></Gnb>
//           <Component {...pageProps} />
//         </SessionProvider>
//       </body>
//     </html>
//   )
// }

export default async function RootLayout({ children }) {
  let isLoggedin = false;
  const USERID = "7";
  let user = isLoggedin ? await getUser(USERID) : null;

  return (
    <html lang="ko">
      <body>
      {/* <SessionProvider session={session}> */}
        <Gnb user={user}></Gnb>
        {children}
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}

// export const instance = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : "https://bootcamp-api.codeit.kr/api",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "*/*",
//   },
//   timeout: 10000,
// });

// export const getRequest = wrapRequest(async (url, data) => {
//   return instance.get(url, { params: data });
// });

// export const getUserQueryFn = async (userId) => {
//   const response = await getRequest(`/users/${userId}`);
//   return response.data[0];
// };

// const { data: user } = useQuery({
//     queryKey: ["user"],
//     queryFn: () => getUserQueryFn(userId),
// });
