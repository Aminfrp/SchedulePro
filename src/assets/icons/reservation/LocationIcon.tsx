import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={11}
    fill="none"
    {...props}
  >
    <Path
      stroke="#625D5D"
      d="M9.719 5.364c0 2.579-2.741 4.367-3.805 4.964a.84.84 0 0 1-.828 0C4.022 9.73 1.28 7.943 1.28 5.364c0-2.455 2.044-4.091 4.219-4.091 2.25 0 4.219 1.636 4.219 4.09Z"
    />
    <Path
      stroke="#625D5D"
      d="M7.25 5.363c0 .915-.769 1.682-1.75 1.682s-1.75-.767-1.75-1.682c0-.914.769-1.681 1.75-1.681s1.75.767 1.75 1.681Z"
    />
  </Svg>
)
export default SvgComponent