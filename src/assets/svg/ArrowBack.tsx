import * as React from "react"
import Svg, { Path, Mask } from "react-native-svg"

function ArrowBack() {
  return (
    <Svg
      width={16}
      height={14}
      viewBox="0 0 16 14"
      fill="none"
      
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.378 13.658c.43-.455.43-1.194 0-1.65L3.756 8.167H14.3c.607 0 1.1-.523 1.1-1.167s-.492-1.167-1.1-1.167H3.756l3.622-3.841c.43-.456.43-1.195 0-1.65a1.056 1.056 0 00-1.556 0L.324 6.173A1.177 1.177 0 000 7c0 .16.03.311.085.45a1.17 1.17 0 00.238.376l5.5 5.832c.429.456 1.125.456 1.555 0z"
        fill="#222B45"
      />
      <Mask
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={16}
        height={14}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.378 13.658c.43-.455.43-1.194 0-1.65L3.756 8.167H14.3c.607 0 1.1-.523 1.1-1.167s-.492-1.167-1.1-1.167H3.756l3.622-3.841c.43-.456.43-1.195 0-1.65a1.056 1.056 0 00-1.556 0L.324 6.173A1.177 1.177 0 000 7c0 .16.03.311.085.45a1.17 1.17 0 00.238.376l5.5 5.832c.429.456 1.125.456 1.555 0z"
          fill="#fff"
        />
      </Mask>
    </Svg>
  )
}

export default ArrowBack
