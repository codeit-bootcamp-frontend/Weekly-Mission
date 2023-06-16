import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

const emphasisStyles = []

for (let i = 1; i <= 4; i += 1) {
  const emphasisStyle = style({
    background: `linear-gradient(
      90deg,
      ${vars.color[`emphasis${i}Left` as keyof typeof vars.color]},
      ${vars.color[`emphasis${i}Right` as keyof typeof vars.color]}
    )`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  })

  emphasisStyles.push(emphasisStyle)
}

export const [emphasis1, emphasis2, emphasis3, emphasis4] = emphasisStyles

export const homeBody = style({
  paddingTop: '12rem',
  paddingBottom: '17rem',
  backgroundColor: vars.color.white,
  '@media': {
    'screen and (max-width: 1199px)': {
      paddingTop: '8rem',
    },
    'screen and (max-width: 767px)': {
      margin: '0',
      padding: '4rem 3.2rem 8rem',
    },
  },
})

export const contentTitle = style({
  width: '29rem',
  fontSize: '4.8rem',
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '26.2rem',
    },
    'screen and (max-width: 767px)': {
      width: '100%',
      order: '0',
      fontSize: '2.4rem',
    },
  },
})

export const contentDescription = style({
  width: '29rem',
  lineHeight: '150%',
  fontWeight: 500,
  color: vars.color.homeContentDescription,
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '26.2rem',
    },
    'screen and (max-width: 767px)': {
      width: '100%',
      order: '2',
      fontSize: '1.5rem',
    },
  },
})

export const contentImage = style({
  position: 'relative',
  width: '55rem',
  height: '45rem',
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '38.5rem',
      height: '31.5rem',
    },
    'screen and (max-width: 767px)': {
      width: '100%',
      height: 0,
      paddingBottom: '82%',
      order: 1,
    },
  },
})

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'space-between',
  gap: '1rem',
  width: '100rem',
  height: '45rem',
  margin: '10rem auto',
  ':first-of-type': {
    marginTop: '0',
  },
  ':last-of-type': {
    marginBottom: '0',
  },
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '70rem',
      height: '31.5rem',
    },
    'screen and (max-width: 767px)': {
      gap: '2rem',
      width: '100%',
      height: 'auto',
      margin: '8rem 0',
    },
  },
})

export const evenImage = style({
  order: '-1',
  '@media': {
    'screen and (max-width: 767px)': {
      order: '1',
    },
  },
})

export const brHide = style({
  '@media': {
    'screen and (max-width: 767px)': {
      display: 'none',
    },
  },
})
