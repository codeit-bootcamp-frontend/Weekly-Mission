import { style } from '@vanilla-extract/css'

export const container = style({
  height: '50vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  maxWidth: '40rem',
})

export const content = style({
  margin: '25px 0 60px',
  textAlign: 'center',
})
