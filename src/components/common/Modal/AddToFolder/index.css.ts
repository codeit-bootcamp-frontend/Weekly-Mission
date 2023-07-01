import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  color: vars.color.gray7,
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

export const modalButtons = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2.4rem',
})

export const modalButton = style({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.8rem',
  borderRadius: '0.8rem',
  width: '28rem',
  lineHeight: '2.4rem',
  backgroundColor: vars.color.white,
})

export const selectedButton = style({
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.8rem',
  borderRadius: '0.8rem',
  width: '28rem',
  lineHeight: '2.4rem',
  color: vars.color.primary,
  backgroundColor: vars.color.gray5,
})

export const modalButtonTitle = style({
  display: 'flex',
  gap: '0.8rem',
})
