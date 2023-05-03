import { Helmet } from "react-helmet-async";
import Account from "components/Account";

function SignupPage() {
  return (
    <>
      <Helmet>
        <title>회원가입 | Linkbrary</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <Account></Account>
    </>
  );
}

export default SignupPage;
