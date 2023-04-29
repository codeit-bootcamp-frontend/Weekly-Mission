import { useUserId } from "contexts/UserIdContext";
import { Navigate } from "react-router-dom";
// import { getFolders } from "utils/api";

// async function getFolderData() {
//   const folders = await getFolders();
//   console.log(folders);
// }

function SharedPage() {
  const userId = useUserId();
  const isAuth = userId > 0 ? true : false;

  if (!isAuth) return <Navigate to="/signin" />;

  // getFolderData();
  return <div>SharedPage</div>;
}

export default SharedPage;
