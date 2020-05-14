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
  const {
    deviceInfo: { type: device, isMobile },
  } = useRuntime()

  return { device, isMobile }
}

export default useDevice
