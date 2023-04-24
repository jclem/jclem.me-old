import {Analytics} from '@vercel/analytics/react'
import {cva} from 'class-variance-authority'
import 'katex/dist/katex.min.css'
import {Hanken_Grotesk} from 'next/font/google'
import localFont from 'next/font/local'
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
    },
    {
      path: '../fonts/BerkeleyMono-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-mono',
  display: 'swap'
})

const bodyClass = cva([
  berkeleyMono.variable,
  hankenGrotesk.variable,
  'mx-auto max-w-3xl w-full p-4 sm:p-8 flex flex-col gap-8'
])()

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
