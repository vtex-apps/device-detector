import { useRuntime } from 'vtex.render-runtime'

export interface DeviceInfo {
  device: Device
  isMobile: boolean
}

export enum Device {
  phone = 'phone',
  tablet = 'tablet',
  desktop = 'desktop',
}

const useDevice = () => {
  const { deviceInfo, hints } = useRuntime()

  if (!deviceInfo) {
    /** Fallback code to support transition to device info coming
     * from render-runtime. Should be removed in the near future */

    return {
      device: hints.phone
        ? Device.phone
        : hints.tablet
        ? Device.tablet
        : Device.desktop,
      isMobile: hints.mobile,
    }
  }

  const { type: device, isMobile } = deviceInfo

  return { device, isMobile }
}

export default useDevice
