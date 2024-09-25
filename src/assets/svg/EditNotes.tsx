import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function EditNotes() {
  return (
    <Svg width={13} height={13} viewBox="0 0 12 12" fill="none">
      <Path
        d="M9.75 6a.375.375 0 11.75 0v4.125a.375.375 0 01-.375.375h-8.25a.375.375 0 01-.375-.375v-8.25a.375.375 0 01.375-.375H6a.375.375 0 010 .75H2.25v7.5h7.5V6z"
        fill="#fff"
      />
      <Path
        d="M5.507 6.495l.619-.088 3.801-3.8a.375.375 0 10-.53-.531l-3.802 3.8-.089.619h.001zm4.95-4.95a1.125 1.125 0 010 1.591l-3.889 3.89a.375.375 0 01-.212.106l-1.237.177a.375.375 0 01-.425-.425l.177-1.237a.375.375 0 01.106-.213l3.89-3.888a1.125 1.125 0 011.59 0v-.001z"
        fill="#fff"
      />
    </Svg>
  );
}

export default EditNotes;
