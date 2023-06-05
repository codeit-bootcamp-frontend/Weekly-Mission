import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';

const useUser = () => {
  return useQuery(['user'], async () => {
    const { data } = await axios.get('user');
    return data;
  });
};

export default useUser;
