import Gnb from "@/components/Gnb/Gnb";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Gnb>{children}</Gnb>
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

  
