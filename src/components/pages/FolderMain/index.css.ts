import { style } from '@vanilla-extract/css'
import { vars } from '@/lib/theme.css'

export const wrapper = style({
  paddingTop: '4rem',
  paddingBottom: '10rem',
  backgroundColor: vars.color.white,
  '@media': {
    'screen and (max-width: 767px)': {
      paddingTop: '2rem',
      paddingBottom: '6rem',
    },
  },
})

export const container = style({
  width: '106rem',
  margin: '0 auto',
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '70.4rem',
    },
    'screen and (max-width: 767px)': {
      width: '100%',
      maxWidth: '32.5rem',
    },
  },
})

export const firstLine = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginBottom: '2.4rem',
  width: '100%',
  '@media': {
    'screen and (max-width: 767px)': {
      marginTop: '3.2rem',
    },
  },
})

export const secondLine = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2.4rem',
  '@media': {
    'screen and (max-width: 767px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1.2rem',
      marginBottom: '2rem',
    },
  },
})

export const slTitle = style({
  fontSize: '2.4rem',
  fontWeight: '600',
})

export const slOption = style({
  display: 'flex',
  gap: '1.2rem',
})

export const optionButton = style({
  cursor: 'pointer',
  display: 'flex',
  gap: '0.4rem',
  fontSize: '1.4rem',
  fontWeight: '600',
  backgroundColor: vars.color.white,
  color: vars.color.gray2,
})

export const buttons = style({
  display: 'flex',
  gap: '0.8rem',
  flexWrap: 'wrap',
})

export const searchBar = style({
  marginBottom: '4rem',
  '@media': {
    'screen and (max-width: 767px)': {
      marginBottom: '3.2rem',
    },
  },
})

export const addFolder = style({
  cursor: 'pointer',
  color: vars.color.primary,
  backgroundColor: vars.color.white,
  fontWeight: '500',
  '@media': {
    'screen and (max-width: 767px)': {
      display: 'none',
    },
  },
})

export const addFolderMobile = style({
  display: 'none',
  cursor: 'pointer',
  position: 'fixed',
  zIndex: '1',
  left: '50%',
  bottom: '10rem',
  transform: 'translateX(-50%)',
  border: `1px solid ${vars.color.white}`,
  borderRadius: '2rem',
  padding: '0.8rem 2.4rem',
  fontWeight: '500',
  color: vars.color.white,
  backgroundColor: vars.color.primary,
  '@media': {
    'screen and (max-width: 767px)': {
      display: 'block',
    },
  },
})

export const emptyMessage = style({
  margin: '6.5rem auto 3.5rem',
  textAlign: 'center',
  fontSize: '1.6rem',
  fontWeight: '400',
  lineHeight: '2.4rem',
  color: vars.color.black,
})
