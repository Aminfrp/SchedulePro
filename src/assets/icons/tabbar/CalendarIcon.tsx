import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.focused ? "black" : "#9A9A9A"}
      d="M15.5 6.5v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C13.98 2.5 13.42 2.5 12.3 2.5H3.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C.5 4.02.5 4.58.5 5.7v.8m15 0v6.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H3.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C.5 14.98.5 14.42.5 13.3V6.5m15 0H.5"
    />
    <Path
      stroke={props.focused ? "black" : "#9A9A9A"}
      strokeLinecap="round"
      d="M4.5.5v4m7-4v4"
    />
  </Svg>
);
export default SvgComponent;
