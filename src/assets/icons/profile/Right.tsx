import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    fill="none"
    {...props}
  >
    <Path stroke="#625D5D" d="m1 1 6 6-6 6" />
  </Svg>
);
export default SvgComponent;
