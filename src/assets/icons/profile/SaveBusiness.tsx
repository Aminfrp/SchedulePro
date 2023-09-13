import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#222"
      d="M.889 5.895c0-2.382 0-3.573.78-4.313.782-.74 2.04-.74 4.553-.74h3.556c2.514 0 3.771 0 4.552.74.781.74.781 1.931.781 4.313v5.75c0 2.26 0 3.389-.75 3.735-.75.345-1.689-.353-3.564-1.749l-.6-.447C9.142 12.4 8.615 12.007 8 12.007s-1.142.392-2.197 1.177l-.6.447c-1.875 1.396-2.813 2.094-3.564 1.748-.75-.345-.75-1.475-.75-3.734v-5.75Z"
    />
  </Svg>
);
export default SvgComponent;
