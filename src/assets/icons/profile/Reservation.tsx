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
      d="M9.302 1.798c.653-.435.98-.653 1.336-.618.356.036.633.313 1.188.868l2.126 2.126c.555.555.832.832.867 1.188.036.356-.182.682-.617 1.335l-1.365 2.047c-.402.603-.603.905-.775 1.22a7.995 7.995 0 0 0-.644 1.557c-.102.345-.173.7-.316 1.411l-.17.849a.891.891 0 0 1-1.38.558 31.19 31.19 0 0 1-7.891-7.89.891.891 0 0 1 .558-1.382l.849-.17c.71-.142 1.066-.213 1.41-.315a8 8 0 0 0 1.557-.644c.316-.172.618-.373 1.22-.775l2.047-1.365Z"
    />
    <Path stroke="#222" strokeLinecap="round" d="m.889 15.111 4-4" />
  </Svg>
);
export default SvgComponent;
