import axios from 'axios';

const getUser = async () => {
  try {
    const response = await axios.get(
      'https://bootcamp-api.codeit.kr/api/sample/user'
    );
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error('데이터를 받지 못했습니다.');
  }
};

export default getUser;
