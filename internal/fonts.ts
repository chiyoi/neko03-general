import { Noto_Sans_Mono } from 'next/font/google'

const NotoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})
export const FontNotoSansMono = NotoSansMono.style
