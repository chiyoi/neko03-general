'use client'
import { Button } from '@radix-ui/themes'
import { useToast } from '../../../toast'
import { FontNotoSansMono } from '../../fonts'

export default () => {
  const toast = useToast()
  return (
    <Button m='9' radius='full' variant='soft' onClick={() => toast('nyan')} style={FontNotoSansMono}>nyan~</Button>
  )
}
