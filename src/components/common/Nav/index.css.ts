import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
  padding: '2rem 20rem',
  maxWidth: '192rem',
  height: '9.4rem',
  '@media': {
    'screen and (max-width: 1199px)': {
      maxWidth: '86.4rem',
      padding: '2rem 3.2rem',
    },
    'screen and (max-width: 767px)': {
      margin: '0',
      padding: '0 3.2rem',
      height: '6.3rem',
    },
  },
})

export const styledButtonLink = style({
  width: '12.8rem',
  '@media': {
    'screen and (max-width: 767px)': {
      width: '8rem',
      padding: '1rem 0',
      fontSize: '1.4rem',
    },
  },
})

export const userProfile = style({
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
  '@media': {
    'screen and (max-width: 767px)': {
      display: 'none',
    },
  },
})

export const profileEmail = style({
  color: vars.color.gray7,
})
