import { globalStyles } from './globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <head>
        <style>{globalStyles}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
