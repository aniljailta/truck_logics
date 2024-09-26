import DateIcon from '@/assets/svg/DateIcon';
import DeleteNotesIcon from '@/assets/svg/DeleteNotesIcon';
import EditNotes from '@/assets/svg/EditNotes';
import StartingTripIcon from '@/assets/svg/StartingTripIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import appColor from '@/constants/Colors';
import {appMargins} from '@/constants/Styles';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import DocumentNameIcon from '@/assets/svg/DocumentNameIcon';
import ViewDocIcon from '@/assets/svg/ViewDocIcon';
import { getStatusTextColor } from '@/helpers/utility';
import TruckIcon from '@/assets/svg/TruckIcon';
import PickupTruckIcon from '@/assets/svg/PickupTruckIcon';
interface CheckCallsAndDocsListCardProps {
  status?: string;
  date?: string;
  time?: string;
  docName?: string;
  docDescription?: string;
  isDoc?: boolean;
  onIcon1Press?: () => void;
  onIcon2Press?: () => void;
}
const CheckCallsAndDocsListCard: React.FC<CheckCallsAndDocsListCardProps> = ({
  status = '',
  date,
  time,
  docName,
  docDescription,
  isDoc,
  onIcon1Press,
  onIcon2Press,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          {isDoc ? <DocumentNameIcon /> : status === 'starting_trip' ? <StartingTripIcon />:<PickupTruckIcon color={getStatusTextColor(status)}/>}
          {isDoc ? (
            <Text style={styles.title}>{docName}</Text>
          ) : (
            <Text style={[styles.title, {color: getStatusTextColor(status)}]}>{status}</Text>
          )}
        </View>

        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={[
              styles.iconContainer,
              {
                backgroundColor: appColor.BUTTON_SECONDARY_COLOR,
              },
            ]}
            onPress={() => {}}>
            {isDoc ? <ViewDocIcon /> : <EditNotes />}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.iconContainer,
              {
                backgroundColor: appColor.APP_ORANGE_COLOR,
              },
            ]}
            onPress={() => {}}>
            <DeleteNotesIcon />
          </TouchableOpacity>
        </View>
      </View>
      {isDoc ? (
        <Text style={styles.docDescription}>{docDescription}</Text>
      ) : (
        <View style={styles.dateTimeContainer}>
          <View style={styles.infoRow}>
            <DateIcon />
            <Text style={styles.infoText}>{date}</Text>
          </View>

          <View style={[styles.infoRow, {marginLeft: appMargins.MARGIN_20}]}>
            <TimeIcon />
            <Text style={styles.infoText}>{time}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default CheckCallsAndDocsListCard;
