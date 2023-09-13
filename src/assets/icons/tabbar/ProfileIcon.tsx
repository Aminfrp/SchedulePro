import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgComponent = (props) => {
  const { focused } = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      fill="none"
      {...props}
    >
      <Circle
        cx={8.5}
        cy={4.25}
        r={3.75}
        stroke={focused ? "black" : "#9A9A9A"}
        strokeLinecap="round"
      />
      <Path
        stroke={focused ? "black" : "#9A9A9A"}
        strokeLinecap="round"
        d="M.968 13.526c.69-2.33 3.103-3.432 5.533-3.432H10.5c2.43 0 4.843 1.102 5.533 3.432.175.592.315 1.244.386 1.944.056.55-.397.999-.95.999H1.532c-.552 0-1.005-.45-.95-.999.072-.7.212-1.352.387-1.944Z"
      />
    </Svg>
  );
};
export default SvgComponent;
