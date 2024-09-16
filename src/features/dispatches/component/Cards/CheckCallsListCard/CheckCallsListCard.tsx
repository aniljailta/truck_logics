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

const CheckCallsListCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <StartingTripIcon />
          <Text style={styles.title}>Starting Trip</Text>
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
            <EditNotes />
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
      <View style={styles.dateTimeContainer}>
        <View style={styles.infoRow}>
          <DateIcon />
          <Text style={styles.infoText}>07/08/2024</Text>
        </View>

        <View style={[styles.infoRow, {marginLeft: appMargins.MARGIN_20}]}>
          <TimeIcon />
          <Text style={styles.infoText}>10:22 AM</Text>
        </View>
      </View>
    </View>
  );
};

export default CheckCallsListCard;
