import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => {
  const { focused } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={17}
      fill="none"
      {...props}
    >
      <Path
        stroke={focused ? "black" : "#9A9A9A"}
        d="M1 8.273c0-1.282 0-1.923.274-2.487.275-.564.79-.98 1.821-1.815l1-.81C5.96 1.653 6.89.898 8 .898c1.11 0 2.041.755 3.905 2.263l1 .81c1.03.834 1.546 1.251 1.82 1.815C15 6.35 15 6.99 15 8.273v4.005c0 1.78 0 2.671-.586 3.224-.586.554-1.528.554-3.414.554H5c-1.886 0-2.828 0-3.414-.554C1 14.95 1 14.06 1 12.278V8.273Z"
      />
      <Path
        stroke={focused ? "black" : "#9A9A9A"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 16.055V11.39a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v4.666"
      />
    </Svg>
  );
};
export default SvgComponent;
