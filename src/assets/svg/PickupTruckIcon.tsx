import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function PickupTruckIcon({color}: {color: string}) {
  return (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none">
      <G clipPath="url(#clip0_250_720)">
        <Path
          d="M1.524 5.18A1.03 1.03 0 00.5 6.204v9.416c0 .598.482 1.08 1.08 1.08h1.474a2.16 2.16 0 002.126 1.8 2.16 2.16 0 002.126-1.8h3.33c.266 0 .504-.112.687-.281.186.164.426.278.697.281h.394a2.16 2.16 0 002.126 1.8c1.188 0 2.16-.972 2.16-2.16 0-1.188-.972-2.16-2.16-2.16a2.16 2.16 0 00-2.126 1.8h-.394a.401.401 0 01-.247-.124.358.358 0 01-.113-.236V8.78c0-.135.225-.36.36-.36h2.88c.283 0 .68.302.956.63.003.004.009.007.011.011l.057.08H14.18c-.574 0-1.08.463-1.08 1.08v1.44c0 .299.135.562.326.753.191.191.454.326.754.326h3.6v2.88c0 .135-.225.36-.36.36h-.72v.72h.72c.598 0 1.08-.482 1.08-1.08v-3.465c0-.824-.574-1.552-.574-1.552h-.011l-1.485-1.98V8.61l-.011-.011c-.332-.4-.83-.9-1.519-.9h-2.88c-.128 0-.246.027-.36.068V6.226c0-.552-.436-1.046-1.012-1.046H1.524zm0 .72h9.124c.154 0 .292.15.292.326v9.45a.302.302 0 01-.304.304h-3.33a2.16 2.16 0 00-2.126-1.8 2.16 2.16 0 00-2.126 1.8H1.58c-.135 0-.36-.226-.36-.36V6.204a.3.3 0 01.304-.304zM14.18 9.86h2.284l.877 1.17s.326.558.394.99H14.18c-.06 0-.157-.045-.236-.124-.079-.078-.124-.176-.124-.236v-1.44c0-.181.214-.36.36-.36zm-9 5.04c.8 0 1.44.64 1.44 1.44 0 .8-.64 1.44-1.44 1.44-.8 0-1.44-.64-1.44-1.44 0-.8.64-1.44 1.44-1.44zm9.36 0c.8 0 1.44.64 1.44 1.44 0 .8-.64 1.44-1.44 1.44-.8 0-1.44-.64-1.44-1.44 0-.8.64-1.44 1.44-1.44z"
          fill={color ? color : "#7A7A7A"}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_250_720">
          <Path fill="#fff" transform="translate(.5 .5)" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default PickupTruckIcon;
