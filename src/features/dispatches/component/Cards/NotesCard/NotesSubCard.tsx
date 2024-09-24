import React from 'react';
import {Text, View} from 'react-native';
import styles from './Styles';
interface NotesSubCardProps {
  body: string;
  createdAt: string;
  createdBy: string;
  completedAt: string;
  completedBy: string;
  assignedTo: string;
}

const NotesSubCard: React.FC<NotesSubCardProps> = ({
  body,
  createdAt,
  createdBy,
  completedAt,
  completedBy,
  assignedTo,
}) => {
  return (
    <>
      <Text style={styles.noteDetailHeading}>{body}</Text>
      <Text style={styles.noteDetailsSubheading}>
        Created 08/02 06:44 am (Local Time) by Evangeline Mendoza
      </Text>
      <Text style={styles.noteDetailHeading}>
        Assigned To Evangeline Mendoza
      </Text>
      <Text style={styles.noteDetailsSubheading}>
        Completed 08/02 01:14 by Evangeline Mendoza
      </Text>
      <View style={styles.divider}></View>
    </>
  );
};

export default NotesSubCard;
