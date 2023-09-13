import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Rect width={14.4} height={12} x={0.8} y={3.2} stroke="#9A9A9A" rx={2} />
    <Path
      stroke="#9A9A9A"
      strokeLinecap="round"
      d="M.8 7.2h14.4M5.6 11.2h4.8M4.8.8V4M11.2.8V4"
    />
  </Svg>
);
export default SvgComponent;
