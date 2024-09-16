import AddIcon from '@/assets/svg/AddIcon';
import CallsIcon from '@/assets/svg/CallsIcon';
import DateIcon from '@/assets/svg/DateIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import TruckIcon from '@/assets/svg/TruckIcon';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import appColor from '@/constants/Colors';
import {appMargins} from '@/constants/Styles';

interface CheckCallCardProps {
  deliveryInfo?: string;
  date?: string;
  time?: string;
  onAddPress?: () => void;
  onViewAllPress?: () => void;
}

const CheckCallCard: React.FC<CheckCallCardProps> = ({
  deliveryInfo,
  date,
  time,
  onAddPress,
  onViewAllPress,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <CallsIcon />
          <Text style={styles.title}>Recent Check Call</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
          <AddIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {deliveryInfo && (
          <View style={styles.infoRow}>
            <TruckIcon
              fill={appColor.IN_ACTIVE_TAB_COLOR}
              height={18}
              width={18}
            />
            <Text style={styles.infoText}>{deliveryInfo}</Text>
          </View>
        )}
        <View style={styles.dateTimeContainer}>
          {date && (
            <View style={styles.infoRow}>
              <DateIcon />
              <Text style={styles.infoText}>{date}</Text>
            </View>
          )}
          {time && (
            <View style={[styles.infoRow, {marginLeft: appMargins.MARGIN_20}]}>
              <TimeIcon />
              <Text style={styles.infoText}>{time}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.viewAllButtonContainer}>
        <TouchableOpacity style={styles.viewAllButton} onPress={onViewAllPress}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckCallCard;
