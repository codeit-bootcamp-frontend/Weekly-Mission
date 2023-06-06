import { selector } from 'recoil';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 } from 'uuid';
import userAtom from './userAtom';
import defaultUserImage from '@/public/default-profile.svg';

const userSelector = selector({
  key: v4(),
  get: ({ get }) => {
    const user = get(userAtom);
    const userImage = user.profileImageSource || defaultUserImage;

    return {
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      userImage,
    };
  },
});

export default userSelector;
