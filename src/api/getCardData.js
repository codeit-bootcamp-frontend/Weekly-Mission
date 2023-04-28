import axios from 'axios';
import { useEffect } from 'react';

const getCardData = async () => {
  try {
    const response = await axios.get(
      'https://bootcamp-api.codeit.kr/api/sample/folder'
    );
    const { data } = response.data;
    return data;
  } catch (err) {
    throw new Error('데이터를 받지 못했습니다.');
  }
};

export default getCardData;
