import React from 'react';
import {Text, View} from 'react-native';
import styles from './Styles';
import appColor from '@/constants/Colors';

const NotesSubCard = () => {
  return (
    <>
      <Text style={styles.noteDetailHeading}>
        $317.07 SAIA QUOTED Quote #349186924
      </Text>
      <Text style={styles.noteDetailsSubheading}>
        Created 08/02 06:44 am (Local Time) by Evangeline Mendoza
      </Text>
      <Text style={styles.noteDetailHeading}>
        Assigned To Evangeline Mendoza
      </Text>
      <Text style={styles.noteDetailsSubheading}>
        Completed 08/02 01:14 by Evangeline Mendoza
      </Text>
      <View
        style={{
          backgroundColor: '#DFDFDF',
          height: 1,
          width: '100%',
          marginVertical: 10,
        }}></View>
    </>
  );
};

export default NotesSubCard;
