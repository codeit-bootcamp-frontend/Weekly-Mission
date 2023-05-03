import { Helmet } from "react-helmet-async";
import Account from "components/Account";

function SigninPage() {
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
