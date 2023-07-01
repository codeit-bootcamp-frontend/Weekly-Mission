import { style } from '@vanilla-extract/css'

export const logo = style({
  position: 'relative',
  width: '13.3rem',
  height: '2.4rem',
  '@media': {
    'screen and (max-width: 767px)': {
      width: '7.7rem',
      height: '1.4rem',
    },
  },
})
