import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="none"
    {...props}
  >
    <Path stroke="#1D7BE9" strokeLinecap="round" d="M7 4h10M1 12h10" />
    <Circle
      cx={4}
      cy={4}
      r={3}
      stroke="#1D7BE9"
      strokeLinecap="round"
      transform="rotate(90 4 4)"
    />
    <Circle
      cx={14}
      cy={12}
      r={3}
      stroke="#1D7BE9"
      strokeLinecap="round"
      transform="rotate(90 14 12)"
    />
  </Svg>
);
export default SvgComponent;
