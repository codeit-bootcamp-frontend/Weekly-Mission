import Gnb from "@/components/Gnb/gnb";
import styles from "./page.module.css";
import getUserData from "@/lib/getUserData";

export default async function Home() {
  const user = await getUserData();
  return (
    <>
      <Gnb user={user} />
    </>
  );
}
