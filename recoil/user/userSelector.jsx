import { selector } from 'recoil';
import userAtom from './userAtom';
import defaultUserImage from '@/public/default-profile.svg';

const userSelector = selector({
  key: 'userSelector',
  get: ({ get }) => {
    const user = get(userAtom);

    return {
      userId: user.id || '',
      userName: user.name || '',
      userEmail: user.email || '',
      userImage: user.profileImageSource || defaultUserImage,
    };
  },
});

export default userSelector;
