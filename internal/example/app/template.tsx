'use client'
import { ThemeProvider } from 'next-themes'
import { Theme } from '@radix-ui/themes'
import { ToastProvider } from '../../../toast'
import HomeLink from '../../../components/HomeLink'
import { ChildrenProps } from '../../props'

export default ({ children }: ChildrenProps) => (
  <ThemeProvider attribute='class'>
    <Theme accentColor='pink'>
      <ToastProvider>
        {children}
        <HomeLink title='neko03★moe' href='/' />
      </ToastProvider>
    </Theme>
  </ThemeProvider>
)
