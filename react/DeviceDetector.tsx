import React from 'react'
import useDevice, { DeviceInfo } from './useDevice'

const DeviceDetector = ({
  children,
}: {
  children: (deviceInfo: DeviceInfo) => React.ReactNode
}) => {
  const { device, isMobile } = useDevice()

  return children({ device, isMobile })
}

export default DeviceDetector
