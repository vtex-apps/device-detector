import { useMedia } from 'use-media'
import { useSSR, useRuntime } from 'vtex.render-runtime'

export interface DeviceInfo {
  device: Device
  isMobile: boolean
}

export enum Device {
  phone = 'phone',
  tablet = 'tablet',
  desktop = 'desktop',
}

interface Breakpoints {
  medium: string
  large: string
}

const useDevice = (breakpoints?: Breakpoints) => {
  /** These screensizes are hardcoded, based on the default
   * Tachyons breakpoints. They should probably be the ones
   * configured via the style.json file, if available. */

  const { medium, large } = breakpoints || {
    medium: '40rem',
    large: '64.1rem',
  }
  const isSSR = useSSR()
  const { hints } = useRuntime()
  const isScreenMedium = useMedia({ minWidth: medium })
  const isScreenLarge = useMedia({ minWidth: large })

  if (isSSR) {
    return {
      device: hints.phone
        ? Device.phone
        : hints.tablet
        ? Device.tablet
        : Device.desktop,
      isMobile: hints.mobile,
    }
  }

  return {
    device: isScreenLarge
      ? Device.desktop
      : isScreenMedium
      ? Device.tablet
      : Device.phone,
    isMobile: !isScreenLarge,
  }
}

export default useDevice
