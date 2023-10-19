import GlobalStyle from '@/styles/_globalStyled'
import StyledConfig from '@/styles/_styled.config'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carrinho',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
       
}
