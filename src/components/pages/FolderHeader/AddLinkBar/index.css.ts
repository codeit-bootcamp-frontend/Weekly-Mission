import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const searchForm = style({
  position: 'relative',
})

export const searchInput = style({
  width: '80rem',
  border: `1px solid ${vars.color.primary}`,
  borderRadius: '1.5rem',
  padding: '2.5rem 11.2rem 2.5rem 5.2rem',
  backgroundColor: vars.color.white,
  '::placeholder': {
    color: vars.color.gray2,
  },
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '70.4rem',
    },
    'screen and (max-width: 767px)': {
      padding: '1.8rem 9.8rem 1.8rem 3.4rem',
      width: '32.5rem',
      fontSize: '1.4rem',
    },
  },
})

export const shareIcon = style({
  position: 'absolute',
  top: '2.5rem',
  left: '2rem',
  width: '2rem',
  height: '2rem',
  '@media': {
    'screen and (max-width: 767px)': {
      top: '1.85rem',
      left: '1rem',
      width: '1.6rem',
      height: '1.6rem',
    },
  },
})

export const searchButton = style({
  position: 'absolute',
  top: '1.6rem',
  right: '1.6rem',
  width: '8rem',
  height: '3.7rem',
  padding: '1rem 1.55rem',
  fontSize: '1.4rem',
  '@media': {
    'screen and (max-width: 767px)': {
      top: '0.8rem',
      right: '1rem',
    },
  },
})
