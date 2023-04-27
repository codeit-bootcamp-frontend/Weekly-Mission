import axios from 'axios';

const getUser = async () => {
  const response = await axios.get(
    'https://bootcamp-api.codeit.kr/api/sample/user'
  );
  const { data } = response;
  return data;
};

export default getUser;
