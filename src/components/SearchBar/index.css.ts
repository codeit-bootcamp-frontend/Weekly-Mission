import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const container = style({
  position: 'relative',
})

export const searchInput = style({
  width: '100%',
  border: '0',
  borderRadius: '1rem',
  padding: '1.5rem',
  paddingLeft: '4.2rem',
  color: vars.color.gray8,
  backgroundColor: vars.color.gray6,
  '@media': {
    'screen and (max-width: 767px)': {
      padding: '1.3rem',
      paddingLeft: '3.8rem',
      fontSize: '1.4rem',
    },
  },
})

export const searchIcon = style({
  position: 'absolute',
  top: '1.6rem',
  left: '1.6rem',
  width: '1.6rem',
  height: '1.6rem',
  '@media': {
    'screen and (max-width: 767px)': {
      top: '1.35rem',
    },
  },
})
