import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const button = style({
  cursor: 'pointer',
  border: `1px solid ${vars.color.primary}`,
  borderRadius: '5px',
  padding: '0.8rem 1.2rem',
  lineHeight: '1.9rem',
  '@media': {
    'screen and (max-width: 767px)': {
      padding: '0.6rem 1rem',
      fontSize: '1.4rem',
      lineHeight: '1.7rem',
    },
  },
})

export const filled = style({
  color: 'white',
  backgroundColor: vars.color.primary,
})

export const unFilled = style({
  color: 'inherit',
  backgroundColor: vars.color.white,
})
