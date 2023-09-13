import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <Rect width={9} height={7.5} x={0.5} y={2} stroke="#625D5D" rx={2} />
    <Path
      stroke="#625D5D"
      strokeLinecap="round"
      d="M.5 4.5h9M3.5 7h3M3 .5v2M7 .5v2"
    />
  </Svg>
)
export default SvgComponent