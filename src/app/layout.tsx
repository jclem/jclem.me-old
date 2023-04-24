import {Hanken_Grotesk} from '@next/font/google'
import localFont from '@next/font/local'
import {Analytics} from '@vercel/analytics/react'
import {cva} from 'class-variance-authority'
import {FC, PropsWithChildren} from 'react'
import '../styles/globals.css'

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})

const berkeleyMono = localFont({
  src: [
    {
      path: '../fonts/BerkeleyMono-Regular.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-mono',
  display: 'swap'
})

const bodyClass = cva([berkeleyMono.className, hankenGrotesk.className])()

const RootLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <html>
      <head></head>
      <body className={bodyClass}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
