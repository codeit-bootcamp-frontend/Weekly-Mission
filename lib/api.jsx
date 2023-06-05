import axios from '@/lib/axios';

export const getFolders = async () => {
  try {
    const res = await axios.get('folder');
    return res.data;
  } catch (error) {
    console.error(`getFolders error: ${error}`);
    return error;
  }
};

export const getUsers = async () => {
  try {
    const res = await axios.get('user');
    return res.data;
  } catch (error) {
    console.error(`getUsers error: ${error}`);
    return error;
  }
};
