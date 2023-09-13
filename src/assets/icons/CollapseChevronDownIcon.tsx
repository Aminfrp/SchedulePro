import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={8}
    fill="none"
    {...props}
  >
    <Path stroke="#1D7BE9" d="M13 1 7 7 1 1" />
  </Svg>
)
export default SvgComponent
