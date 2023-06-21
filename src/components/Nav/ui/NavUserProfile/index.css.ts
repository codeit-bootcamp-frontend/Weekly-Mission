import { vars } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const profile = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.6rem',
  textAlign: 'center',
  lineHeight: '2.8rem',
  fontSize: '1.4rem',
})

export const profileImage = style({
  position: 'relative',
  width: '2.8rem',
  height: '2.8rem',
  borderRadius: '70%',
  overflow: 'hidden',
})

export const profileEmail = style({
  color: vars.color.gray7,
})
