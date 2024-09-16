import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CloseIcon() {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
      <Path
        d="M1 13L13 1M1 1l12 12"
        stroke="#838383"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CloseIcon;
