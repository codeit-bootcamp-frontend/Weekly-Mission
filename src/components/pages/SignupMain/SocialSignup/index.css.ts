import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '3.2rem',
  border: `0.1rem solid ${vars.color.gray3}`,
  borderRadius: '0.8rem',
  padding: '1.2rem 2.4rem',
  backgroundColor: vars.color.gray4,
  fontSize: '1.4rem',
  color: vars.color.gray1,
})

export const iconContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '10rem',
  lineHeight: '4.2rem',
})

export const icon = style({
  position: 'relative',
  width: '4.2rem',
  height: '4.2rem',
  verticalAlign: 'middle',
})
