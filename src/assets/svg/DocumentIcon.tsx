import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function DocumentIcon(props: any) {
  const {fill} = props;
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_38_767)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.773 18.823H3.656V1.177h9.411v4.706h4.706v12.942zM14.243 1.42l3.287 3.286h-3.286V1.42zm4.19 2.526l-3.43-3.43A1.758 1.758 0 0013.757 0H2.479v20h16.47V5.194c0-.47-.183-.914-.516-1.248zM6.01 12.94h8.235v-1.176H6.009v1.176zm0-4.706h9.411V7.06H6.01v1.176zm0 7.06h4.705v-1.177H6.01v1.176zm0-4.707h7.058V9.412H6.01v1.176zm0-4.706h4.705V4.706H6.01v1.176z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_38_767">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default DocumentIcon;
