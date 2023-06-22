import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2.4rem 2rem',
  '@media': {
    'screen and (max-width: 1199px)': {
      gap: '2.4rem',
    },
    'screen and (max-width: 767px)': {
      gap: '2rem',
      marginTop: '3.2rem',
    },
  },
})
