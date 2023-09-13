import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#222"
      d="M14.4.9a2.7 2.7 0 0 1 2.7 2.7V5.53c0 .253 0 .38-.045.478a.5.5 0 0 1-.248.248c-.099.045-.225.045-.478.045H11.7M14.4.9a2.7 2.7 0 0 0-2.7 2.7v2.7M14.4.9H4.9c-1.886 0-2.828 0-3.414.586C.9 2.072.9 3.014.9 4.9v12.2l2.7-.9 2.7.9 2.7-.9 2.7.9V6.3"
    />
    <Path
      stroke="#222"
      strokeLinecap="round"
      d="M4.5 4.5h3.6M5.4 8.1h-.9M4.5 11.7h2.7"
    />
  </Svg>
);
export default SvgComponent;
