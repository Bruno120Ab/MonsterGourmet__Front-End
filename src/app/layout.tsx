import StyledConfig from '@/styles/_styled.config'
import GlobalStyle from '@/styles/_globalStyled'

import { Analytics } from '@vercel/analytics/react';

import Head from './head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <Head />
        <head>
        <link rel="shortcut icon" href="/LogoOficcial.png" type="image/x-icon" />
        </head>
        <body style={{position: 'relative'}}>
          <GlobalStyle />
          <StyledConfig>{children}</StyledConfig>
          <Analytics />
        </body>
      </html>
  )
}
