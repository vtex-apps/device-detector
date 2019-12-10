# Device Detector

Use this app's HOC or hook to find out current device's viewport size.

### Usage

#### useDevice

Returns an object with the format of `DeviceInfo` defined as:
```js
interface DeviceInfo {
  device: Device
  isMobile: boolean
}

enum Device {
  phone = 'phone',
  tablet = 'tablet',
  desktop = 'desktop',
}
```

```js
import { useDevice } from 'vtex.device-detector'
const MyComponent = props => {
  const { isMobile } = useDevice()
  if (isMobile) { 
    // is phone or tablet!
  }
  return ...
}
```

or

```js
import { useDevice } from 'vtex.device-detector'
const MyComponent = props => {
  const { device } = useDevice()
  if (device === 'tablet') { 
    //is tablet!
  }
  return ...
}
```

#### withDevice

It is a HOC, it injects two props (`isMobile` and `device`) into your component's props:

```js
type WithDeviceProps = Props & {
  isMobile: boolean
  device: Device
}
enum Device {
  phone = 'phone',
  tablet = 'tablet',
  desktop = 'desktop',
}
```

```js
import { withDevice } from 'vtex.device-detector'
const MyComponent = props => {
  if (props.isMobile) { 
    // is phone or tablet!
  }
  return ...
}

export default withDevice(MyComponent)
```

or

```js
import { useDevice } from 'vtex.device-detector'
const MyComponent = props => {
  if (props.device === 'tablet') { 
    //is tablet!
  }
  return ...
}

export default withDevice(MyComponent)
```
