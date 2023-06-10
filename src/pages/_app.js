import { UserProvider } from "@/contexts/UserProvider";
import getData from "@/lib/getData";
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
  const data = await getData(`/api/users/${userId}`);
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
