import axios from "axios";

const userData = async () => {
  try{
    const response = await axios.get('https://bootcamp-api.codeit.kr/api/sample/user')
    const {data} = response.data
    return data;
  }
  catch(err){
    throw new Error('데이터를 가져올 수 없습니다.')
  }
}
userData()

export default userData;
