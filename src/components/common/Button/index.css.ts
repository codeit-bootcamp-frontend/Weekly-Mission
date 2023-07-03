import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const button = style({
  cursor: 'pointer',
  borderRadius: '0.8rem',
  textAlign: 'center',
  padding: '1.6rem 0',
  fontSize: '1.8rem',
  fontWeight: '600',
  color: vars.color.gray6,
  background: `linear-gradient(90deg, ${vars.color.primary}, ${vars.color.primaryLight})`,
})
