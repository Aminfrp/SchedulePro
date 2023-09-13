import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      stroke="#625D5D"
      d="m10.04 8.374 1.53 1.53a.608.608 0 0 1 0 .86 3.647 3.647 0 0 1-4.767.338l-.739-.554a18.06 18.06 0 0 1-3.612-3.612l-.554-.739a3.647 3.647 0 0 1 .339-4.767.608.608 0 0 1 .86 0l1.53 1.53a1 1 0 0 1 0 1.414l-.446.445a.355.355 0 0 0-.066.41A8.176 8.176 0 0 0 7.77 8.885a.355.355 0 0 0 .41-.066l.445-.445a1 1 0 0 1 1.414 0Z"
    />
  </Svg>
)
export default SvgComponent
