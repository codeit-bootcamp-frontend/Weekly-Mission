import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'

globalStyle('*', {
  boxSizing: 'border-box',
})

globalStyle('html', {
  fontSize: '62.5%',
})

globalStyle('body', {
  margin: '0',
  backgroundColor: vars.color.gray5,
  wordBreak: 'keep-all',
  fontFamily: 'Pretendard, sans-serif',
  fontSize: '1.6rem',
})

globalStyle('input', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  outlineColor: vars.color.primary,
})

globalStyle('button', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  border: 'none',
  padding: '0',
})

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  margin: '0',
})
