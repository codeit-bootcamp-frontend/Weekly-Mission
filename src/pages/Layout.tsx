import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { getUserRequest } from "../api/userApi";
import Footer from "../components/Footer/Footer";
import Gnb, { GnbProps } from "../components/Gnb/Gnb";

const Layout = () => {
  const [userData, setUserData] = useState<GnbProps>();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/shared") {
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
    }
  }, [location.pathname]);

  return (
    <>
      {userData ? <Gnb {...userData} /> : <Gnb />}
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Layout;
