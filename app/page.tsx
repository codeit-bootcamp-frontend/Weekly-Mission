import Footer from "@/components/Footer/Footer";
import Gnb from "@/components/Gnb/Gnb";
import ContentsSection from "@/components/MainSection/ContentsSection";
import HeroSection from "@/components/MainSection/HeroSection";
import { getUser } from "@/lib/axios/userRequest";
import { tempUserDatas } from "@/utils/constants";
import prisma from "@/utils/prismadb";
import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";
import styles from "./page.module.scss";

export const revalidate = 3600;

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const currentUser = await prisma?.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) {
    return null;
  }

  const userId = tempUserDatas[currentUser.id];
  const userProfile = await getUser(userId);

  if (!userProfile) {
    throw new Error(`Failed to fetch user data`);
  }
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
