import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={57}
    height={56}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m21.641 19.278-7.462 17.49H9.31l-3.672-13.96c-.223-.858-.415-1.173-1.095-1.535-1.106-.59-2.935-1.143-4.543-1.489l.11-.506h7.837a2.17 2.17 0 0 1 1.397.506c.39.327.647.78.726 1.277l1.94 10.122 4.793-11.905h4.838ZM40.719 31.06c.02-4.618-6.498-4.872-6.453-6.935.015-.627.623-1.295 1.953-1.465a8.827 8.827 0 0 1 4.543.784l.808-3.71a12.56 12.56 0 0 0-4.309-.777c-4.553 0-7.756 2.38-7.785 5.784-.028 2.518 2.287 3.92 4.033 4.76 1.795.857 2.399 1.407 2.39 2.173-.013 1.176-1.43 1.691-2.756 1.712-2.316.035-3.657-.613-4.73-1.103l-.835 3.831c1.076.485 3.062.91 5.121.929 4.838 0 8.004-2.348 8.02-5.983Zm12.02 5.71H57l-3.717-17.49H49.35a2.123 2.123 0 0 0-1.182.344c-.35.23-.621.556-.78.938L40.48 36.77h4.835l.962-2.614h5.909l.553 2.614Zm-5.137-6.198 2.423-6.568 1.396 6.568h-3.819Zm-19.38-11.293-3.807 17.49h-4.607l3.811-17.49h4.603Z"
    />
  </Svg>
)
export default SvgComponent
