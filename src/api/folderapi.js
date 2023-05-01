import axios from "axios";

const folderData = async () => {
  try{
    const response = await axios.get('https://bootcamp-api.codeit.kr/api/sample/folder')
    const {data} = response.data
    return data;
  }
  catch(err){
    throw new Error('데이터를 가져올 수 없습니다.')
  }
}

export default folderData;


