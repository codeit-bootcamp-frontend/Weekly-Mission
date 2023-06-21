import { style } from '@vanilla-extract/css'
import { button } from '@/components/Button/Button.css'
import { vars } from '@/lib/theme.css'

export const emphasis = style({
  background: `linear-gradient(90deg, ${vars.color.primary}, ${vars.color.redLight})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
})

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 767px)': {
      margin: '0',
      padding: '0 3.2rem',
    },
  },
})

export const title = style({
  textAlign: 'center',
  fontSize: '6.4rem',
  marginTop: '7rem',
  marginBottom: '4rem',
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '48rem',
      marginTop: '4rem',
    },
    'screen and (max-width: 767px)': {
      width: '24rem',
      margin: '2.8rem 0 2.4rem',
      fontSize: '3.2rem',
    },
  },
})

export const styledButtonLink = style([
  button,
  {
    width: '35rem',
  },
  {
    '@media': {
      'screen and (max-width: 767px)': {
        width: '20rem',
        padding: '1rem 0',
        fontSize: '1.4rem',
      },
    },
  },
])

export const image = style({
  position: 'relative',
  width: '120rem',
  height: '59rem',
  marginTop: '4rem',
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '69.8rem',
      height: '34.3rem',
    },
    'screen and (max-width: 767px)': {
      width: '100%',
      height: '0',
      marginTop: '2.4rem',
      paddingBottom: '49%',
    },
  },
})
