import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const wrapper = style({
  backgroundColor: vars.color.black,
})

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 auto',
  padding: '3.2rem 10.4rem 3.2rem',
  maxWidth: '192rem',
  height: '16rem',
  fontFamily: 'Arial, sans-serif',
  '@media': {
    'screen and (max-width: 767px)': {
      flexWrap: 'wrap',
      alignContent: 'space-between',
      padding: '3.2rem',
    },
  },
})

export const firstItem = style({
  color: vars.color.gray9,
  '@media': {
    'screen and (max-width: 767px)': {
      width: '100%',
      order: 1,
    },
  },
})

export const secondItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '16.3rem',
  color: vars.color.gray10,
})

export const icons = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '11.6rem',
})

export const icon = style({
  position: 'relative',
  width: '2rem',
  height: '2rem',
})
