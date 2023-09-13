import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#1D7BE9"
      fillRule="evenodd"
      d="M4.5.77a.5.5 0 0 0-.5.5v3.5H.5a.5.5 0 1 0 0 1H4v3.5a.5.5 0 0 0 1 0v-3.5h3.5a.5.5 0 0 0 0-1H5v-3.5a.5.5 0 0 0-.5-.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
