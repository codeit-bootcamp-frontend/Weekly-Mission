import logo from "../assets/images/logo.png";
import "../assets/stylesheets/Gnb.css";

function Gnb() {
  return (
    <div className="gnb-container">
      <div className="gnb">
        <a id="home" href="/">
          <img className="logo" src={logo}></img>
        </a>
        <a className="button" id="signin" href="/signin">
          로그인
        </a>
      </div>
    </div>
  );
}

export default Gnb;
