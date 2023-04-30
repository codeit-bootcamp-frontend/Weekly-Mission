import styled from "styled-components";
import { useUserId, useSetUserId } from "../contexts/UserIdContext";

const Select = styled.select`
  position: absolute;
`;

function UserIdSelect() {
  const userId = useUserId();
  const setUserId = useSetUserId();

  const handleChange = (e) => setUserId(e.target.value);

  return (
    <Select value={userId} onChange={handleChange}>
      <option value={1}>로그인 상태</option>
      <option value={-1}>로그아웃 상태</option>
    </Select>
  );
}

export default UserIdSelect;
