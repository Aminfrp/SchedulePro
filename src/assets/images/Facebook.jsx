import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#1877F2"
        d="M19 9.5C19 4.256 14.744 0 9.5 0S0 4.256 0 9.5c0 4.598 3.268 8.427 7.6 9.31v-6.46H5.7V9.5h1.9V7.125A3.329 3.329 0 0 1 10.925 3.8H13.3v2.85h-1.9a.953.953 0 0 0-.95.95v1.9h2.85v2.85h-2.85v6.603A9.499 9.499 0 0 0 19 9.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h19v19H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
