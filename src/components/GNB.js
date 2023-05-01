import linkbrary from "../images/linkbrary.svg";
import defaultProfileImg from "../images/default_profile_image.svg";
import "./GNB.css";

function GNB({ userInfo }) {
  const email = userInfo?.email ?? "";
  const profileImageSource = userInfo?.profileImageSource ?? defaultProfileImg;

  return (
    <nav className="gnb">
      <a className="linkbrary-logo" href="/">
        <img className="linkbrary-logo-image" src={linkbrary} />
      </a>
      {userInfo ? (
        <div className="profile-container">
          <img src={profileImageSource} />
          <span className="profile-email">{email}</span>
        </div>
      ) : (
        <a className="login-button" href="/signin/">
          로그인
        </a>
      )}
    </nav>
  );
}

export default GNB;
