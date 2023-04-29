import { useAuth, useSetAuth } from "../contexts/AuthContext";

function AuthSelect() {
  const auth = useAuth();
  const setAuth = useSetAuth();

  const handleChange = (e) => setAuth(e.target.value);

  return (
    <select value={auth} onChange={handleChange}>
      <option value="true">로그인 상태</option>
      <option value="false">로그아웃 상태</option>
    </select>
  );
}

export default AuthSelect;
