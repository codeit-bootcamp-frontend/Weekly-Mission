import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/sample',
});

export default instance;
