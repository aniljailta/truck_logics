import CallGreyIcon from '@/assets/svg/CallGreyIcon';
import DateIcon from '@/assets/svg/DateIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import TruckIcon from '@/assets/svg/TruckIcon';
import appColor from '@/constants/Colors';
import {appMargins} from '@/constants/Styles';
import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './Styles';

const DispatchDetailCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.headingText}>Dispatch Details</Text>
      <View style={styles.dateTimeContainer}>
        <View style={styles.infoRow}>
          <DateIcon />
          <Text style={styles.infoText}>05/29/2024</Text>
        </View>
        <View style={[styles.infoRow, {marginLeft: appMargins.MARGIN_20}]}>
          <TimeIcon />
          <Text style={styles.infoText}>14:25 am</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <TruckIcon
            fill={appColor.IN_ACTIVE_TAB_COLOR}
            height={20}
            width={20}
          />
          <Text style={styles.infoText}>Truck number (45EH8578)</Text>
        </View>
        <View style={styles.infoRow}>
          <CallGreyIcon />
          <Text style={styles.infoText}>Trailer number (45EH8578)</Text>
        </View>
      </View>
      <Image
        style={styles.mapImage}
        source={require('@/assets/images/mapview.png')}
      />
    </View>
  );
};

export default DispatchDetailCard;
