import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getUserRequest } from "../api/userApi";
import Footer from "../components/Footer/Footer";
import Gnb, { GnbProps } from "../components/Gnb/Gnb";

const Layout = () => {
  const [userData, setUserData] = useState<GnbProps>();

  useEffect(() => {
    getUserRequest()
      .then((res) => res.data)
      .then((data) => {
        const {
          name: username,
          email,
          profileImageSource: profileImgSrc,
        } = data;
        setUserData({ username, email, profileImgSrc });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {userData ? <Gnb {...userData} /> : <Gnb />}
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Layout;
