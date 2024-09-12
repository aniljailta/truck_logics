import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TimeIcon() {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
     
    >
      <Path
        d="M8 15A7 7 0 108 1a7 7 0 000 14z"
        stroke="#979797"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 4v4l-3 3"
        stroke="#979797"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default TimeIcon
