import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#1D7BE9"
      d="M.542 5.5h10.806L7.21 9.138a.473.473 0 0 0-.019.707c.206.2.55.208.766.017l4.726-4.155A.957.957 0 0 0 13 5a.964.964 0 0 0-.327-.716L7.957.138A.564.564 0 0 0 7.583 0a.563.563 0 0 0-.392.155.473.473 0 0 0 .019.707L11.365 4.5H.542C.242 4.5 0 4.724 0 5s.243.5.542.5Z"
    />
  </Svg>
);
export default SvgComponent;
