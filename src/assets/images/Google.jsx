import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#4285F4"
      fillRule="evenodd"
      d="M18.62 9.716c0-.674-.06-1.321-.173-1.943H9.5v3.675h5.113a4.37 4.37 0 0 1-1.896 2.867v2.383h3.07c1.797-1.654 2.833-4.089 2.833-6.982Z"
      clipRule="evenodd"
    />
    <Path
      fill="#34A853"
      fillRule="evenodd"
      d="M9.5 19c2.565 0 4.716-.85 6.287-2.302l-3.07-2.383c-.85.57-1.939.907-3.217.907-2.474 0-4.569-1.671-5.316-3.917H1.01v2.461A9.496 9.496 0 0 0 9.5 19Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FBBC05"
      fillRule="evenodd"
      d="M4.184 11.305A5.71 5.71 0 0 1 3.886 9.5c0-.626.108-1.235.298-1.805V5.234H1.01A9.496 9.496 0 0 0 0 9.5c0 1.533.367 2.984 1.01 4.266l3.174-2.461Z"
      clipRule="evenodd"
    />
    <Path
      fill="#EA4335"
      fillRule="evenodd"
      d="M9.5 3.778c1.395 0 2.647.48 3.632 1.421l2.724-2.725C14.211.941 12.061 0 9.5 0a9.496 9.496 0 0 0-8.49 5.234l3.174 2.461C4.931 5.45 7.026 3.778 9.5 3.778Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
