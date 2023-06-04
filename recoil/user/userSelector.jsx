import { selector } from 'recoil';
import userAtom from './userAtom';
import defaultUserImage from '@/public/default-profile.svg';

const userSelector = selector({
  key: 'userSelector',
  get: ({ get }) => {
    const user = get(userAtom);
    const userImage = user.image || defaultUserImage;
    return {
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      userImage,
    };
  },
});

export default userSelector;
