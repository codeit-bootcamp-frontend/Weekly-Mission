import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const modalHeader = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
  marginBottom: '2.4rem',
})

export const modalTitle = style({
  fontSize: '2rem',
})

export const modalDescription = style({
  fontSize: '1.4rem',
  lineHeight: '2.2rem',
  color: vars.color.gray2,
})

export const modalButton = style({
  width: '28rem',
  fontSize: '1.6rem',
  background: vars.color.red,
})
