import { style } from '@vanilla-extract/css'

export const container = style({
  margin: '24rem auto',
  maxWidth: '40rem',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 767px)': {
      maxWidth: '46.4rem',
      margin: '0 auto',
      padding: '12rem, 3.2rem, 10rem',
    },
  },
})
