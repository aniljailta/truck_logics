import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PasswordEyeOff(props: any) {
  return (
    <Svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.557 7.058a1.333 1.333 0 001.886 1.885m2.178 2.172A5.811 5.811 0 018.5 12c-2.4 0-4.4-1.333-6-4 .848-1.413 1.808-2.452 2.88-3.116m1.907-.764c.399-.08.806-.121 1.213-.12 2.4 0 4.4 1.333 6 4-.444.74-.92 1.378-1.425 1.913M2.5 2l12 12"
        stroke="#ACB5BB"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PasswordEyeOff;
