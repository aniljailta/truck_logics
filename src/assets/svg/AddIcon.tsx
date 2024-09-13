import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function AddIcon() {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
      <Path
        d="M1 6h10m-5 5V1"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default AddIcon;
