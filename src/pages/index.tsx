import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Hero from "@/components/Hero/Hero";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Hero />
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
