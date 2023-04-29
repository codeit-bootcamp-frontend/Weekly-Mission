import { useUserId } from "contexts/UserIdContext";
import { Navigate } from "react-router-dom";

function MyLinkPage() {
  const userId = useUserId();
  const isAuth = userId > 0 ? true : false;

  if (!isAuth) return <Navigate to="/" />;

  return <div>MyLinkPage</div>;
}

export default MyLinkPage;
