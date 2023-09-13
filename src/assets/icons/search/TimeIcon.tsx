import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Circle cx={9} cy={9} r={7.611} stroke="#9A9A9A" />
    <Path
      stroke="#9A9A9A"
      strokeLinecap="round"
      d="M13 9H9.25A.25.25 0 0 1 9 8.75V5.889"
    />
  </Svg>
);
export default SvgComponent;
