import { atom } from 'recoil';

const userAtom = atom({
  key: 'userAtom',
  default: {
    id: 0,
    name: '',
    image: '',
    profileImageSource: '',
  },
});

export default userAtom;
