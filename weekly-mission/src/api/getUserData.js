const getUserData = async () => {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
  const { data } = await response.json();
  return data;
};

export default getUserData;
