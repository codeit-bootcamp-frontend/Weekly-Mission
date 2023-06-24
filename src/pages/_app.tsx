import { UserProvider } from "@/contexts/UserProvider";
import getData from "@/lib/getData";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import type { NextPage, NextPageContext } from "next";
import { ReactElement, ReactNode } from "react";
import { User } from "$/types";
import { pretendard } from "@/lib/localFont";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

interface MyAppProps extends AppPropsWithLayout {
  userInfo: User;
}

function MyApp({ Component, pageProps, userInfo }: MyAppProps): ReactElement {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <UserProvider initialUser={userInfo}>
      <div className={pretendard.className}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </UserProvider>
  );
}

MyApp.getInitialProps = async ({
  Component,
  ctx,
}: MyAppProps & { ctx: NextPageContext }) => {
  // TODO: 추후 인증으로 변경해야함.
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
