import { ReactNode } from 'react'
import {NextUIProvider} from '@nextui-org/react'
import ThemeRegistry from './ThemeRegistry'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeRegistry options={{ key: 'mui' }}>
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeRegistry>
  )
}

export default Providers