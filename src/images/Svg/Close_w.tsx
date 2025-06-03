import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { normalizeHeight } from "../../components/ResponsiveScreen"

function SvgComponent(props) {
  return (
    <Svg
      width={normalizeHeight(30)}
      height={normalizeHeight(30)}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.265 7.37c.545.54.585 1.392.12 1.978l-.117.13-5.297 5.277 5.309 5.264c.586.581.588 1.525.002 2.108a1.507 1.507 0 01-1.99.118l-.13-.116-5.31-5.264-5.297 5.277a1.507 1.507 0 01-2.122.002 1.484 1.484 0 01-.119-1.978l.117-.13 5.297-5.277-5.31-5.264a1.484 1.484 0 01-.002-2.108 1.507 1.507 0 011.99-.118l.131.116 5.31 5.264 5.297-5.277a1.507 1.507 0 012.121-.002z"
        fill="#FAFAFA"
        fillOpacity={0.7}
      />
    </Svg>
  )
}

export default SvgComponent
