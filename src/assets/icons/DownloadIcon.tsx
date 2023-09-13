import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#1D7BE9"
      d="m7 8.75-.354.354.354.353.354-.353L7 8.75ZM7.5.875a.5.5 0 0 0-1 0h1ZM2.271 4.729l4.375 4.375.708-.708-4.375-4.375-.708.708Zm5.083 4.375 4.375-4.375-.708-.708-4.375 4.375.708.708ZM7.5 8.75V.875h-1V8.75h1Z"
    />
    <Path
      stroke="#1D7BE9"
      d="M.875 10.5v.875c0 .966.784 1.75 1.75 1.75h8.75a1.75 1.75 0 0 0 1.75-1.75V10.5"
    />
  </Svg>
)
export default SvgComponent
