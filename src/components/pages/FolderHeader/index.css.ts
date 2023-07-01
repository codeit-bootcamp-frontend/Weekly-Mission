import { style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { vars } from '@/lib/theme.css'

export const folderHeader = style({
  position: 'sticky',
  zIndex: '1',
  margin: '3.6rem auto 6.6rem',
  '@media': {
    'screen and (max-width: 767px)': {
      margin: '0.8rem auto 2.4rem',
    },
  },
})

export const bottomHeader = style({
  top: calc.subtract('100vh', '11.3rem'),
  '@media': {
    'screen and (max-width: 767px)': {
      top: calc.subtract('100vh', '8.6rem'),
    },
  },
})

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
  padding: '2.4rem 0',
  backgroundColor: vars.color.gray5,
})
