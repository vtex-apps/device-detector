import type { FC } from 'react'
import type { RenderContext } from 'vtex.render-runtime'

import useDevice from './useDevice'

type Device = RenderContext.RenderContext['deviceInfo']['type']

export interface DeviceInfo {
  device: Device
  isMobile: boolean
}

interface Props {
  children?: (deviceInfo: DeviceInfo) => React.ReactElement
}

const DeviceDetector: FC<Props> = ({ children }) => {
  const { device, isMobile } = useDevice()

  if (!children) {
    return null
  }

  return children({ device, isMobile })
}

export default DeviceDetector
