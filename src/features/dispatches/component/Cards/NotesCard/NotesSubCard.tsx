import React from 'react';
import {Text, View} from 'react-native';
import styles from './Styles';
import { formatDateTime } from '@/helpers/utility';
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
        Created {formatDateTime(createdAt).formattedDate}{' '}{formatDateTime(createdAt).formattedTime} (Local Time) by {createdBy}
      </Text>
      <Text style={styles.noteDetailHeading}>
        Assigned To {assignedTo}
      </Text>
      <Text style={styles.noteDetailsSubheading}>
        Completed 08/02 01:14 by {completedBy}
      </Text>
      <View style={styles.divider}></View>
    </>
  );
};

export default NotesSubCard;
