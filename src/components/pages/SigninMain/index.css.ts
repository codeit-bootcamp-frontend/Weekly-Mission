import { vars } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  margin: '24rem auto',
  maxWidth: '40rem',
  textAlign: 'center',
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
