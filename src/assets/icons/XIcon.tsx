import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeWidth={2}
      d="m6.364 16.314 9.951-9.95M16.315 16.263l-9.951-9.95"
    />
  </Svg>
);
export default SvgComponent;
