import appColor from '@/constants/Colors';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DashboardIcon(props: any) {
  const {fill} = props;
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.107 1.467h-.074c-.335 0-.624-.001-.88.06a2.2 2.2 0 00-1.626 1.626c-.061.256-.06.545-.06.88V7.7c0 .336-.001.624.06.88a2.2 2.2 0 001.626 1.626c.256.061.545.061.88.06H7.7c.336.001.624.001.88-.06a2.2 2.2 0 001.626-1.626c.061-.256.061-.544.06-.88V4.033c.001-.335.001-.624-.06-.88A2.2 2.2 0 008.58 1.527c-.256-.061-.544-.06-.88-.06H4.107zm-.612 1.487c.064-.016.16-.02.612-.02h3.52c.451 0 .548.004.61.02a.733.733 0 01.543.541c.015.064.02.16.02.612v3.52c0 .451-.005.548-.02.61a.733.733 0 01-.542.543c-.063.015-.16.02-.611.02h-3.52c-.452 0-.548-.005-.612-.02a.733.733 0 01-.541-.542c-.016-.063-.02-.16-.02-.611v-3.52c0-.452.004-.548.02-.612a.733.733 0 01.541-.541zm10.878-1.487H14.3c-.336 0-.624-.001-.88.06a2.2 2.2 0 00-1.626 1.626c-.061.256-.061.545-.06.88V7.7c-.001.336-.001.624.06.88a2.2 2.2 0 001.626 1.626c.256.061.544.061.88.06h3.667c.335.001.624.001.88-.06a2.2 2.2 0 001.626-1.626c.06-.256.06-.544.06-.88V4.033c0-.335 0-.624-.06-.88a2.2 2.2 0 00-1.626-1.626c-.256-.061-.545-.06-.88-.06h-3.594zm-.61 1.487c.062-.016.159-.02.61-.02h3.52c.452 0 .548.004.611.02a.733.733 0 01.542.541c.015.064.02.16.02.612v3.52c0 .451-.005.548-.02.61a.733.733 0 01-.541.543c-.064.015-.16.02-.612.02h-3.52c-.451 0-.548-.005-.61-.02a.733.733 0 01-.543-.542c-.015-.063-.02-.16-.02-.611v-3.52c0-.452.005-.548.02-.612a.733.733 0 01.542-.541zm-9.73 8.78H7.7c.336-.001.624-.001.88.06a2.2 2.2 0 011.626 1.626c.061.256.061.544.06.88v3.667c.001.335.001.624-.06.88a2.2 2.2 0 01-1.626 1.626c-.256.06-.544.06-.88.06H4.033c-.335 0-.624 0-.88-.06a2.2 2.2 0 01-1.626-1.626c-.061-.256-.06-.545-.06-.88V14.3c0-.336-.001-.624.06-.88a2.2 2.2 0 011.626-1.626c.256-.061.545-.061.88-.06zm.074 1.466c-.452 0-.548.005-.612.02a.733.733 0 00-.541.542c-.016.063-.02.16-.02.611v3.52c0 .452.004.548.02.611a.733.733 0 00.541.542c.064.015.16.02.612.02h3.52c.451 0 .548-.005.61-.02a.733.733 0 00.543-.541c.015-.064.02-.16.02-.612v-3.52c0-.451-.005-.548-.02-.61a.733.733 0 00-.542-.543c-.063-.015-.16-.02-.611-.02h-3.52zm10.266-1.467H14.3c-.336 0-.624 0-.88.061a2.2 2.2 0 00-1.626 1.626c-.061.256-.061.544-.06.88v3.667c-.001.335-.001.624.06.88a2.2 2.2 0 001.626 1.626c.256.06.544.06.88.06h3.667c.335 0 .624 0 .88-.06a2.2 2.2 0 001.626-1.626c.06-.256.06-.545.06-.88V14.3c0-.336 0-.624-.06-.88a2.2 2.2 0 00-1.626-1.626c-.256-.061-.545-.061-.88-.06h-3.594zm-.61 1.487c.062-.015.159-.02.61-.02h3.52c.452 0 .548.005.611.02a.733.733 0 01.542.542c.015.063.02.16.02.611v3.52c0 .452-.005.548-.02.611a.734.734 0 01-.541.542c-.064.015-.16.02-.612.02h-3.52c-.451 0-.548-.005-.61-.02a.733.733 0 01-.543-.541c-.015-.064-.02-.16-.02-.612v-3.52c0-.451.005-.548.02-.61a.733.733 0 01.542-.543z"
        fill={fill}
      />
    </Svg>
  );
}

export default DashboardIcon;
