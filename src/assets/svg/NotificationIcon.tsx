import * as React from 'react';
import Svg, {Rect, G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function NotificationIcon(props: any) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={34} height={34} rx={5} fill="#fff" />
      <G filter="url(#filter0_d_38_486)">
        <Path
          d="M17 23.417c.917 0 1.667-.713 1.667-1.584h-3.334c0 .871.75 1.584 1.667 1.584zm5-4.75v-3.959c0-2.43-1.358-4.465-3.75-5.003v-.538c0-.657-.558-1.188-1.25-1.188s-1.25.53-1.25 1.188v.538c-2.383.538-3.75 2.565-3.75 5.003v3.959l-1.667 1.583v.792h13.334v-.792L22 18.667zm-1.667.791h-6.666v-4.75c0-1.963 1.258-3.562 3.333-3.562s3.333 1.599 3.333 3.562v4.75z"
          fill="#222B45"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default NotificationIcon;
