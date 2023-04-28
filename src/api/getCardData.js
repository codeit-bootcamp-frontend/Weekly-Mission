import axios from 'axios';

const getCardData = async () => {
  const response = await axios.get(
    'https://bootcamp-api.codeit.kr/api/sample/folder'
  );
  const { data } = response.data;
  return data;
};

export default getCardData;
