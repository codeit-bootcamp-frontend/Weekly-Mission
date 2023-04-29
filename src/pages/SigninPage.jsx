import { Helmet } from "react-helmet";
import { useUserId } from "contexts/UserIdContext";
import { Navigate } from "react-router-dom";

function SigninPage() {
  const userId = useUserId();
  const isAuth = userId > 0 ? true : false;

  if (isAuth) return <Navigate to="/" />;

  return <></>;
}

export default SigninPage;
