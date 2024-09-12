import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DestinationIcon() {
  return (
    <Svg width={12} height={18} viewBox="0 0 12 18" fill="none">
      <Path
        d="M6 .667A5.83 5.83 0 00.167 6.5C.167 10.875 6 17.333 6 17.333s5.833-6.458 5.833-10.833A5.83 5.83 0 006 .667zm0 7.916a2.084 2.084 0 11.002-4.168A2.084 2.084 0 016 8.583z"
        fill="#E95F5F"
      />
    </Svg>
  );
}

export default DestinationIcon;
