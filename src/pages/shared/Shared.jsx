import Footer from "../../Components/Footer";
import Gnb from "../../Components/Gnb";
import SearchBar from "../../Components/SearchBar";
import "./Shared.css";

function Shared() {
  return (
    <>
      <Gnb />
      <SearchBar />
      <Footer />
    </>
  );
}

export default Shared;
// useState에는 카드리스트만 넣고
// 로그인은 어떻게?
