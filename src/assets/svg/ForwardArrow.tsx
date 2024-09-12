import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ForwardArrow() {
  return (
    <Svg width={8} height={14} viewBox="0 0 8 14" fill="none">
      <Path
        d="M0 12.355L4.945 7 0 1.645 1.522 0 8 7l-6.478 7L0 12.355z"
        fill="#979797"
      />
    </Svg>
  );
}

export default ForwardArrow;
