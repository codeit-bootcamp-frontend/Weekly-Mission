import Footer from "@/components/Footer/Footer";
import Gnb from "@/components/Gnb/Gnb";
import ContentsSection from "@/components/MainSection/ContentsSection";
import HeroSection from "@/components/MainSection/HeroSection";
import getCurrentUser from "@/lib/getCurrentUser";

import styles from "./page.module.scss";

export const revalidate = 3600;

export default async function Home() {
  const userProfile = await getCurrentUser();

  return (
    <>
      <Gnb user={userProfile} />
      <main className={styles.main}>
        <HeroSection />
        <ContentsSection />
      </main>
      <Footer />
    </>
  );
}
