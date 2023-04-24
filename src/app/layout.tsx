import {Analytics} from '@vercel/analytics/react'
import {FC, PropsWithChildren} from 'react'
import '../styles/globals.css'

const RootLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <html>
      <head></head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
