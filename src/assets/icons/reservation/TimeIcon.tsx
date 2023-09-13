import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={11}
    fill="none"
    {...props}
  >
    <Circle cx={5.5} cy={5.5} r={4.5} stroke="#625D5D" />
    <Path
      stroke="#625D5D"
      strokeLinecap="round"
      d="M7.75 5.5h-2a.25.25 0 0 1-.25-.25v-1.5"
    />
  </Svg>
)
export default SvgComponent
