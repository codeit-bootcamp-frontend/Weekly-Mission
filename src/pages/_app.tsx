import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageContainer from "@/components/PageContainer/PageContainer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
      <Footer />
    </div>
  );
}
