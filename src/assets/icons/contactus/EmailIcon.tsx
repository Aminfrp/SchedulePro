import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#fff" d="M22 4H2v16h20V4Zm-2 4-8 5-8-5V6l8 5 8-5v2Z" />
  </Svg>
);
export default SvgComponent;
