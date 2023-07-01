import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const modalOverlay = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  inset: '0',
  zIndex: '2',
  backgroundColor: vars.color.modalOverlay,
})

export const modal = style({
  padding: '3.2rem 4rem',
  border: `1px solid ${vars.color.modalBoxBorder}`,
  borderRadius: '1.5rem',
  position: 'relative',
  backgroundColor: vars.color.white,
})

export const closeButton = style({
  cursor: 'pointer',
  position: 'absolute',
  top: '1.6rem',
  right: '1.6rem',
  width: '1.6rem',
  height: '1.6rem',
  backgroundColor: vars.color.white,
})
