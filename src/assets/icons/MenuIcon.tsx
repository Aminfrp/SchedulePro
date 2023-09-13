import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#222"
      strokeLinecap="round"
      d="M1.333 1.333H20M1.333 8H20M1.333 14.667H20"
    />
  </Svg>
);
export default SvgComponent;
