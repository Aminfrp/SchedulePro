import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";
const SvgComponent = (props) => {
  const { focused } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={16}
      fill="none"
      {...props}
    >
      <Ellipse
        cx={6.563}
        cy={6.588}
        stroke={focused ? "black" : "#9A9A9A"}
        rx={5.625}
        ry={5.647}
      />
      <Path
        stroke={focused ? "black" : "#9A9A9A"}
        strokeLinecap="round"
        d="m14.063 15.059-3.75-3.765"
      />
    </Svg>
  );
};
export default SvgComponent;
