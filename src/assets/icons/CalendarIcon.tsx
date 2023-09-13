import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      stroke="#625D5D"
      d="M1.333 4.283c0-1.026 0-1.538.203-1.928a1.8 1.8 0 0 1 .768-.768c.39-.202.902-.202 1.927-.202H9.77c1.025 0 1.537 0 1.927.202a1.8 1.8 0 0 1 .768.768c.203.39.203.902.203 1.928v3.434c0 1.025 0 1.538-.203 1.928a1.8 1.8 0 0 1-.768.768c-.39.202-.902.202-1.927.202H4.23c-1.025 0-1.537 0-1.927-.202a1.8 1.8 0 0 1-.768-.768c-.203-.39-.203-.903-.203-1.928V4.283Z"
    />
    <Path stroke="#625D5D" strokeLinecap="round" d="M1.333 4.461h11.334" />
    <Ellipse cx={3.333} cy={8.308} fill="#625D5D" rx={0.333} ry={0.385} />
  </Svg>
);
export default SvgComponent;
