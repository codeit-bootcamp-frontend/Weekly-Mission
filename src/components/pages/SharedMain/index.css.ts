import { vars } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

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

export const searchBar = style({
  marginBottom: '4rem',
  '@media': {
    'screen and (max-width: 767px)': {
      marginBottom: '3.2rem',
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
