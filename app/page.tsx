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

  let userProfile;
  let userId;
  if (!session?.user?.email) {
    userProfile = null;
  } else {
    const currentUser = await prisma?.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      userProfile = null;
    } else {
      userId = tempUserDatas[currentUser.id];
      userProfile = await getUser(userId);
    }
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
