import { createGlobalTheme } from '@vanilla-extract/css'

const vars = createGlobalTheme(':root', {
  maxWidth: '1100px',
  borderRadius: '12px',
  fontMono: `ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace`,
  foregroundRgb: '0, 0, 0',
  backgroundStartRgb: '214, 219, 220',
  backgroundEndRgb: '255, 255, 255',

  primaryGlow: `conic-gradient(
    from 180deg at 50% 50%,
    #16abff33 0deg,
    #0885ff33 55deg,
    #54d6ff33 120deg,
    #0071ff33 160deg,
    transparent 360deg
  )`,
  secondaryGlow: `radial-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  )`,

  tileStartRgb: '239, 245, 249',
  tileEndRgb: '228, 232, 233',
  tileBorder: `conic-gradient(
    #00000080,
    #00000040,
    #00000030,
    #00000020,
    #00000010,
    #00000010,
    #00000080
  )`,

  calloutRgb: '238, 240, 241',
  calloutBorderRgb: '172, 175, 176',
  cardRgb: '180, 185, 188',
  cardBorderRgb: '131, 134, 135',
})

const globalStyles = `
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}
`

export { vars, globalStyles }
