import { Outlet } from "react-router-dom";
import Nav from "components/Nav";
import Footer from "components/Footer";
import UserIdSelect from "components/UserIdSelect";

function DefaultLayout() {
  return (
    <>
      <Nav />
      <UserIdSelect />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
