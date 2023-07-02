'use client'

import { FC, PropsWithChildren } from "react"
import { Authenticator } from '@aws-amplify/ui-react'
import Header from './AuthenticatorHeader'

const Providers: FC<PropsWithChildren> =({children}) => {
  return (
    <Authenticator components={{ Header }}>
      {children}
    </Authenticator>
  )
}

export default Providers
