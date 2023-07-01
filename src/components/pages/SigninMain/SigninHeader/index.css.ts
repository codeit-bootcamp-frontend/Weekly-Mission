import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const headerText = style({
  margin: '1.6rem 0',
})

export const accountLink = style({
  display: 'inline-block',
  textDecoration: 'underline',
  fontWeight: '600',
  color: vars.color.primary,
})
