import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const image = style({
  position: 'relative',
  width: '6rem',
  height: '6rem',
  marginTop: '2rem',
  marginBottom: '1.2rem',
  borderRadius: '70%',
  overflow: 'hidden',
  '@media': {
    'screen and (max-width: 767px)': {
      width: '4rem',
      height: '4rem',
    },
  },
})

export const name = style({
  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: '1.4rem',
    },
  },
})

export const folder = style({
  margin: '2rem 0 6rem',
  fontSize: '4rem',
  fontWeight: '600',
  '@media': {
    'screen and (max-width: 767px)': {
      margin: '1rem 0 4rem',
      fontSize: '3.2rem',
      fontWeight: '600',
    },
  },
})
