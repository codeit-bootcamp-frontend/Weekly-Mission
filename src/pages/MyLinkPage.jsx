import { useUserId } from "contexts/UserIdContext";

function MyLinkPage() {
  const userId = useUserId();
  const isAuth = userId > 0 ? true : false;
  return <div>MyLinkPage</div>;
}

export default MyLinkPage;
