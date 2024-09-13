import AddIcon from '@/assets/svg/AddIcon';
import CallsIcon from '@/assets/svg/CallsIcon';
import DateIcon from '@/assets/svg/DateIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import TruckIcon from '@/assets/svg/TruckIcon';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface RecentCheckCallCardProps {
  deliveryInfo?: string;
  date?: string;
  time?: string;
  onAddPress?: () => void;
  onViewAllPress?: () => void;
}
const RecentCheckCallCard: React.FC<RecentCheckCallCardProps> = ({
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
          <CallsIcon /> <Text style={styles.title}>Recent Check Call</Text>
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
        <View style={styles.dtaeTimeContainer}>
          {date && (
            <View style={styles.infoRow}>
              <DateIcon /> <Text style={styles.infoText}>{date}</Text>
            </View>
          )}
          {time && (
            <View style={[styles.infoRow, {marginLeft: appMargins.MARGIN_20}]}>
              <TimeIcon /> <Text style={styles.infoText}>{time}</Text>
            </View>
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.viewAllButton} onPress={onViewAllPress}>
        <Text style={styles.viewAllText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};
export default RecentCheckCallCard;
import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {appMargins, appPaddings, appRadius} from '@/constants/Styles';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  card: {
    backgroundColor: appColor.WHITE,
    borderRadius: appFontSize.FONT_12,
    padding: appPaddings.PADDING_16,
    shadowColor: appColor.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: appMargins.MARGIN_16,
  },
  titleContainer: {flexDirection: 'row', alignItems: 'center'},
  title: {
    fontSize: appFontSize.FONT_16,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    color: appColor.BUTTON_COLOR,
    fontFamily: 'Ubuntu-Medium',
    marginLeft: appMargins.MARGIN_8,
  },
  addButton: {
    backgroundColor: '#000',
    borderRadius: appRadius.RADIUS_50,
    padding: appPaddings.PADDING_8,
  },
  content: {marginBottom: appMargins.MARGIN_16},
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: appMargins.MARGIN_8,
  },
  infoText: {
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
    fontFamily: 'Ubuntu-Medium',
    marginLeft: appMargins.MARGIN_8,
    color: appColor.APP_GREY,
  },
  viewAllButton: {
    backgroundColor: appColor.BUTTON_COLOR,
    padding: appPaddings.PADDING_10,
    borderRadius: appRadius.RADIUS_5,
    alignItems: 'center',
  },
  viewAllText: {
    color: appColor.WHITE,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
    fontSize: appFontSize.FONT_14,
    fontFamily: 'Ubuntu-Medium',
  },
  dtaeTimeContainer: {
    flexDirection: 'row',
    marginVertical: appMargins.MARGIN_16,
  },
});
