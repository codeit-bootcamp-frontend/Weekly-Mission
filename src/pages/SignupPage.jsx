import { useUserId } from "contexts/UserIdContext";
import { Navigate } from "react-router-dom";

function SignupPage() {
  const userId = useUserId();
  const isAuth = userId > 0 ? true : false;

  if (isAuth) return <Navigate to="/" />;

  return <div>SignupPage</div>;
}

export default SignupPage;
