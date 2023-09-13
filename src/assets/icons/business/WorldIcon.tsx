import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#625D5D"
      d="m14 3-.952.762a2 2 0 0 1-1.25.438h-2.24a1.272 1.272 0 0 0-.836 2.23l1.352 1.18a5.248 5.248 0 0 1 1.769 4.498 6.994 6.994 0 0 1-.408 1.732L11 15M1 6.75l2.496-.401a1.57 1.57 0 0 1 1.796 1.817l-.08.46a2.52 2.52 0 0 0 1.39 2.7 1.89 1.89 0 0 1 1.008 2.177L7.222 15"
    />
    <Circle cx={8} cy={8} r={7.5} stroke="#625D5D" />
  </Svg>
);
export default SvgComponent;
