import { Helmet } from "react-helmet-async";
import { useUserId } from "contexts/UserIdContext";
import { Navigate } from "react-router-dom";
import Account from "components/Account";

function SigninPage() {
  const userId = useUserId();
  const isAuth = userId > 0 ? true : false;

  if (isAuth) return <Navigate to="/" />;

  return (
    <>
      <Helmet>
        <title>로그인 | Linkbrary</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <Account isSignin={true}></Account>
    </>
  );
}

export default SigninPage;
