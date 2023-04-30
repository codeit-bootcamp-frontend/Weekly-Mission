import { useEffect, useState } from "react";
import getUserData from "../../api/getUserData";
import logo from "../../images/Linkbrary.svg";
import "./Gnb.css";

const Gnb = ({ isLoad }) => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const data = await getUserData();
    setUserData(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <nav>
      {isLoad ? (
        <div className="nav">
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <div className="user">
            <img className="userImage" src={userData && userData.profileImageSource} alt="userImage" />
            <p className="userId">{userData && userData.email}</p>
          </div>
        </div>
      ) : (
        <div>로딩중</div>
      )}
    </nav>
  );
};

export default Gnb;
