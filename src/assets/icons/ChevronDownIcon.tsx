import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={8}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#000"}
      d="M6.306 7.761 1.06 1.304A.8.8 0 0 1 1.68 0h9.64a.8.8 0 0 1 .62 1.304L6.694 7.761a.25.25 0 0 1-.388 0Z"
    />
  </Svg>
);
export default SvgComponent;
