import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <h1>안녕하세요</h1>
    </>
  );
}
