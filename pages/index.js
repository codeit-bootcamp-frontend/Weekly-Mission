import Gnb from "@/components/Gnb";
import IntroduceBoard from "@/components/IntroduceBoard";
import IntroduceCards from "@/components/IntroduceCards";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import classNames from "classnames/bind";

export default function Home() {
  const cx = classNames.bind(styles);
  return (
    <>
      <Gnb />
      <IntroduceBoard />
      <div className={cx("introduce-cards-wrapper")}>
        <IntroduceCards />
      </div>
      <Footer />
    </>
  );
}
