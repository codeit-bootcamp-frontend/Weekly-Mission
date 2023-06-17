import { vars } from '@/lib/theme.css'
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

export const accountLink = style({
  display: 'inline-block',
  textDecoration: 'underline',
  fontWeight: '600',
  color: vars.color.primary,
})

export const headerText = style({
  margin: '1.6rem 0',
})
