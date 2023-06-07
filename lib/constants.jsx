import PropTypes from 'prop-types';
import googleLinkIcon from '@/public/link-google.svg';
import kakaotalkLinkIcon from '@/public/link-kakaotalk.svg';

export const CARD_PROP_TYPES = {
  id: PropTypes.number,
  createdAt: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageSource: PropTypes.string,
};

export const SOCIAL_LINKS = [
  {
    name: 'Google',
    url: 'https://www.google.com/',
    icon: googleLinkIcon,
  },
  {
    name: 'KakaoTalk',
    url: 'https://www.kakaocorp.com/',
    icon: kakaotalkLinkIcon,
  },
];

export const KEY_CODES = {
  ESC: 27,
};
