import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowDown() {
  return (
    <Svg width={8} height={6} viewBox="0 0 8 6" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.471 5.305a.667.667 0 01-.942 0L.195 1.97a.667.667 0 01.943-.942L4 3.89l2.862-2.862a.667.667 0 11.943.942L4.47 5.305z"
        fill="#A9A9A9"
      />
    </Svg>
  );
}

export default ArrowDown;
