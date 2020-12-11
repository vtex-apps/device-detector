import React from 'react'
import type { ComponentType } from 'react'

import useDevice from './useDevice'

function withDevice<P>(Component: ComponentType<P>) {
  const WithDeviceHOC = ({ ...props }: P) => {
    const { isMobile, device } = useDevice()

    return <Component device={device} isMobile={isMobile} {...props} />
  }

  return WithDeviceHOC
}

export default withDevice
