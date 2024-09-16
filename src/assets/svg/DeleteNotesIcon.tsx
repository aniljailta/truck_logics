import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DeleteNotesIcon() {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
      <Path
        d="M1.286 2.571H.429a.429.429 0 110-.857h3.428V.428a.429.429 0 01.429-.429h3.428a.429.429 0 01.429.429v1.286h3.428a.429.429 0 110 .857h-.857v9a.429.429 0 01-.428.429H1.714a.429.429 0 01-.428-.429v-9zm6-.857V.857H4.714v.857h2.572zm-5.143 9.429h7.714V2.57H2.143v8.572zm2.571-1.715A.429.429 0 014.286 9V4.714a.429.429 0 01.857 0V9a.429.429 0 01-.429.428zm2.572 0A.429.429 0 016.857 9V4.714a.429.429 0 01.857 0V9a.429.429 0 01-.428.428z"
        fill="#fff"
      />
    </Svg>
  );
}

export default DeleteNotesIcon;
