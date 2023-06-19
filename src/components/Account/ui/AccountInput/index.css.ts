import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const accountLabel = style({
  textAlign: 'left',
  fontSize: '1.4rem',
})

export const inputContainer = style({
  position: 'relative',
})

export const accountInput = style({
  width: '100%',
  margin: '1.2rem 0 2.4rem',
  border: `0.1rem solid ${vars.color.gray3}`,
  borderRadius: '0.8rem',
  padding: '1.8rem 1.5rem',
  color: vars.color.gray2,
  ':focus': {
    color: vars.color.gray1,
  },
})

export const eyeToggler = style({
  cursor: 'pointer',
  position: 'absolute',
  right: '1.5rem',
  top: '3.3rem',
  width: '1.6rem',
  height: '1.6rem',
  backgroundColor: vars.color.white,
})
