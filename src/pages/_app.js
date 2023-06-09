import { UserProvider } from "@/contexts/UserProvider";
const BASE_URL = process.env.BASE_URL;
import "@/styles/global.css";

function MyApp({ Component, pageProps, userInfo }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <UserProvider initialUser={userInfo}>
      {getLayout(<Component {...pageProps} />)}
    </UserProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // TODO : 추후 인증으로 변경해야함.
  const userId = 1;
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);
  const data = await response.json();
  const userInfo = data.data[0];

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
    userInfo: userInfo || "",
  };
};

export default MyApp;
