import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const eyeToggler = style({
  cursor: 'pointer',
  position: 'absolute',
  right: '1.5rem',
  top: '3.3rem',
  width: '1.6rem',
  height: '1.6rem',
  backgroundColor: vars.color.white,
})
