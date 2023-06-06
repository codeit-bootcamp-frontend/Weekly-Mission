import { atom } from 'recoil';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 } from 'uuid';

const userAtom = atom({
  key: v4(),
  default: {
    id: 0,
    name: '',
    image: '',
    profileImageSource: '',
  },
});

export default userAtom;
