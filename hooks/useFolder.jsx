import { useQuery } from '@tanstack/react-query';
import axios from '@/lib/axios';

const useFolder = () => {
  return useQuery(['folder'], async () => {
    const { data } = await axios.get('folder');
    return data;
  });
};

export default useFolder;
