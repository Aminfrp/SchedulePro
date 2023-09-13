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
      d="m12.152 10.596 2.275 2.275a.81.81 0 0 1 0 1.147 4.863 4.863 0 0 1-6.357.451l-1.108-.83a23.002 23.002 0 0 1-4.6-4.6l-.831-1.11a4.863 4.863 0 0 1 .451-6.356.81.81 0 0 1 1.147 0l2.275 2.275a1 1 0 0 1 0 1.415l-.83.829a.474.474 0 0 0-.088.547 10.9 10.9 0 0 0 4.875 4.875.474.474 0 0 0 .547-.089l.83-.829a1 1 0 0 1 1.414 0Z"
    />
  </Svg>
);
export default SvgComponent;
