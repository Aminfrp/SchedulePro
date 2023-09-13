import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      stroke="#222"
      d="M1.444 3.398c0-1.025 0-1.538.203-1.928a1.8 1.8 0 0 1 .768-.767C2.805.5 3.317.5 4.342.5h9.316c1.025 0 1.537 0 1.927.203a1.8 1.8 0 0 1 .768.767c.203.39.203.903.203 1.928v6.204c0 1.025 0 1.538-.203 1.928a1.8 1.8 0 0 1-.768.767c-.39.203-.902.203-1.927.203H4.342c-1.025 0-1.537 0-1.927-.203a1.8 1.8 0 0 1-.768-.767c-.203-.39-.203-.903-.203-1.928V3.398Z"
    />
    <Path stroke="#222" strokeLinecap="round" d="M1.444 4.5h15.112" />
    <Ellipse cx={4.111} cy={9.5} fill="#222" rx={0.444} ry={0.5} />
  </Svg>
);
export default SvgComponent;
