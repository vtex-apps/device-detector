import { useRuntime } from 'vtex.render-runtime'
import type { RenderContext } from 'vtex.render-runtime'

type Device = RenderContext.RenderContext['deviceInfo']['type']

export interface DeviceInfo {
  device: Device
  isMobile: boolean
}

const useDevice = () => {
  const { deviceInfo, hints } = useRuntime()

  if (!deviceInfo) {
    /** Fallback code to support transition to device info coming
     * from render-runtime. Should be removed in the near future */

    return {
      device: (hints.phone
        ? 'phone'
        : hints.tablet
        ? 'tablet'
        : 'desktop') as Device,
      isMobile: hints.mobile,
    }
  }

  const { type: device, isMobile } = deviceInfo

  return { device, isMobile }
}

export default useDevice
