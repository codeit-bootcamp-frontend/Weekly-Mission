import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const wrapper = style({
  paddingTop: '4rem',
  paddingBottom: '10rem',
  backgroundColor: vars.color.white,
  '@media': {
    'screen and (max-width: 767px)': {
      paddingTop: '2rem',
      paddingBottom: '6rem',
    },
  },
})

export const container = style({
  width: '106rem',
  margin: '0 auto',
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '70.4rem',
    },
    'screen and (max-width: 767px)': {
      width: '100%',
      maxWidth: '32.5rem',
    },
  },
})

export const emptyMessage = style({
  margin: '6.5rem auto 3.5rem',
  textAlign: 'center',
  fontSize: '1.6rem',
  fontWeight: '400',
  lineHeight: '2.4rem',
  color: vars.color.black,
})
