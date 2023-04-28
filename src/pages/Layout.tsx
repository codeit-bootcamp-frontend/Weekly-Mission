import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Gnb from "../components/Gnb/Gnb";

const Layout = (props) => {
  const gnbProps = {
    username: "kenny",
    email: "wnl383@naver.com",
  };
  return (
    <>
      <Gnb {...gnbProps} />
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Layout;
