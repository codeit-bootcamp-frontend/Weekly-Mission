import { vars } from '@/lib/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  borderRadius: '1.5rem',
  overflow: 'hidden',
  width: '34rem',
  height: '33.4rem',
  backgroundColor: vars.color.white,
  filter: 'drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.08))',
  '@media': {
    '(hover: hover)': {
      backgroundColor: vars.color.gray5,
    },
  },
})

export const cardImage = style({
  position: 'relative',
  overflow: 'hidden',
  width: '34rem',
  height: '20rem',
  selectors: {
    'img > &': {
      objectFit: 'cover',
    },
  },
})

export const hoveredCardImage = style({
  '@media': {
    '(hover: hover)': {
      selectors: {
        'img > &': {
          transform: 'scale(1.2)',
          overflow: 'unset',
        },
      },
    },
  },
})

export const bookmarkIcon = style({
  position: 'absolute',
  top: '1.6rem',
  right: '1.6rem',
})

export const cardText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1.5rem 2rem',
})

export const firstLine = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const elapsedTime = style({
  fontSize: '1.4rem',
  color: vars.color.gray8,
})

export const kebabContainer = style({
  position: 'relative',
})

export const kebab = style({
  cursor: 'pointer',
  position: 'relative',
  width: '2.1rem',
  height: '1.7rem',
  backgroundColor: 'inherit',
})

export const popup = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.2rem',
  position: 'absolute',
  top: '2.2rem',
  right: '0',
  fontSize: '1.4rem',
  backgroundColor: vars.color.white,
  boxShadow: `0px 2px 8px ${vars.color.kebabBoxShadow}`,
})

export const popupButton = style({
  cursor: 'pointer',
  padding: '0.7rem 0',
  width: '10rem',
  backgroundColor: vars.color.white,
  '@media': {
    '(hover: hover)': {
      ':hover': {
        color: vars.color.primary,
        backgroundColor: vars.color.gray4,
      },
    },
  },
})

export const cardDescription = style({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  width: '29.5rem',
  lineHeight: '150%',
  fontWeight: '500',
  color: vars.color.black,
})

export const cardCreatedAt = style({
  fontSize: '1.4rem',
  color: vars.color.cardDate,
})
