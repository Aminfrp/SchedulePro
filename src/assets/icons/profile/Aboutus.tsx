import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.111 6.666H7.5a.5.5 0 0 1 .5.5v3.445a.5.5 0 0 0 .5.5h.389M8 4.889h.009"
    />
    <Path
      stroke="#222"
      d="M9.235 15.003A7.111 7.111 0 1 0 6.765.997a7.111 7.111 0 0 0 2.47 14.006Z"
    />
  </Svg>
);
export default SvgComponent;
