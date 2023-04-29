import { useUserId, useSetUserId } from "contexts/UserIdContext";

function UserIdSelect() {
  const userId = useUserId();
  const setUserId = useSetUserId();

  const handleChange = (e) => setUserId(e.target.value);

  return (
    <select value={userId} onChange={handleChange}>
      <option value={1}>로그인 상태</option>
      <option value={-1}>로그아웃 상태</option>
    </select>
  );
}

export default UserIdSelect;
