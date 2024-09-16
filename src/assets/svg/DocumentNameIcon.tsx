import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DocumentNameIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M2.5 6.25V17.5h11.25V6.25H2.5zM1.875 5h12.5a.625.625 0 01.625.625v12.5a.624.624 0 01-.625.625h-12.5a.625.625 0 01-.625-.625v-12.5A.625.625 0 011.875 5zM18.75 1.875v13.75a.624.624 0 01-.625.625H16.25V15h1.25V2.5h-10v1.25H6.25V1.875a.625.625 0 01.625-.625h11.25a.625.625 0 01.625.625zM5 13.125h6.25v1.25H5v-1.25zm0-3.75h6.25v1.25H5v-1.25z"
        fill="#222B45"
      />
    </Svg>
  );
}

export default DocumentNameIcon;
