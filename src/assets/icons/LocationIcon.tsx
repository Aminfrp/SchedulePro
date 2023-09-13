import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      stroke="#625D5D"
      d="M10.688 5.889c0 2.925-3.121 4.942-4.27 5.585a.85.85 0 0 1-.836 0c-1.149-.643-4.27-2.66-4.27-5.585 0-2.75 2.272-4.583 4.688-4.583 2.5 0 4.688 1.833 4.688 4.583Z"
    />
    <Path
      stroke="#625D5D"
      d="M8 5.889c0 1.063-.885 1.944-2 1.944s-2-.88-2-1.944.885-1.945 2-1.945 2 .881 2 1.945Z"
    />
  </Svg>
);
export default SvgComponent;
