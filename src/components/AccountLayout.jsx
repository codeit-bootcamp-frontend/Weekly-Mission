import { Outlet } from "react-router-dom";
import UserIdSelect from "components/UserIdSelect";

function AccountLayout() {
  return (
    <>
      <UserIdSelect />
      <Outlet />
    </>
  );
}

export default AccountLayout;
