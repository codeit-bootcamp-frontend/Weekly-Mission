
import { UserProvider } from '@/contexts/UserProvider';
const BASE_URL = process.env.BASE_URL;
import "@/styles/global.css"

function MyApp({ Component, pageProps, user }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <UserProvider initialUser={user}>
      {getLayout(<Component {...pageProps} />)}
    </UserProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const response = await fetch(`${BASE_URL}api/sample/user`);
  const user = await response.json();

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
    user : user || ""
  };
};

export default MyApp;
