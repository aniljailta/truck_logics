import React from 'react';
import {View, Image, Text} from 'react-native';
import PickupLocationIcon from '@/assets/svg/PickupLocationIcon';
import DestinationIcon from '@/assets/svg/DestinationIcon';
import DateIcon from '@/assets/svg/DateIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import ForwardArrow from '@/assets/svg/ForwardArrow';
import styles from './Styles';

interface LocationInfo {
  location: string;
  date: string;
  time: string;
}
interface StatusColors {
  [key: string]: {
    backgroundColor: string;
    textColor: string;
  };
}
const statusColors: StatusColors = {
  'In Progress': {
    backgroundColor: '#DEFFEB',
    textColor: '#3ABF24',
  },
  Completed: {
    backgroundColor: '#E6F7FF',
    textColor: '#1890FF',
  },
  Cancelled: {
    backgroundColor: '#FFF1F0',
    textColor: '#FF4D4F',
  },
};
interface DispatchesListCardProps {
  dispatchNumber: string;
  status: string;
  pickup: LocationInfo;
  delivery: LocationInfo;
}

const StatusBadge: React.FC<{status: string}> = ({status}) => {
  const colors = statusColors[status] || statusColors['In Progress'];

  return (
    <View
      style={[styles.statusBadge, {backgroundColor: colors.backgroundColor}]}>
      <Text style={[styles.statusText, {color: colors.textColor}]}>
        {status}
      </Text>
    </View>
  );
};

const LocationDot: React.FC<{isPickup?: boolean}> = ({isPickup = true}) => (
  <View
    style={[
      styles.locationDot,
      isPickup ? styles.pickupDot : styles.destinationDot,
    ]}>
    {isPickup ? <PickupLocationIcon /> : <DestinationIcon />}
  </View>
);

const DottedLine: React.FC = () => (
  <View style={styles.dottedLineContainer}>
    {[...Array(5)].map((_, index) => (
      <View key={index} style={styles.dot} />
    ))}
  </View>
);

const LocationDetails: React.FC<LocationInfo> = ({location, date, time}) => (
  <View style={styles.locationDetailsContainer}>
    <Text style={styles.locationText}>{location}</Text>
    <View style={styles.dateTimeContainer}>
      <View style={styles.iconTextContainer}>
        <DateIcon />
        <Text style={styles.dateTimeText}>{date}</Text>
      </View>
      <View style={styles.iconTextContainer}>
        <TimeIcon />
        <Text style={styles.dateTimeText}>{time}</Text>
      </View>
    </View>
  </View>
);

const DispatchesListCard: React.FC<DispatchesListCardProps> = ({
  dispatchNumber,
  status,
  pickup,
  delivery,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.dispatchInfoContainer}>
          <Image
            style={styles.dispatchIcon}
            source={require('@/assets/images/dispatchNumberIcon.png')}
          />
          <Text style={styles.dispatchNumberText}>{dispatchNumber}</Text>
        </View>
        <StatusBadge status={status} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.locationIconsContainer}>
          <LocationDot isPickup={true} />
          <DottedLine />
          <LocationDot isPickup={false} />
        </View>

        <View style={styles.locationsContainer}>
          <LocationDetails {...pickup} />
          <View style={styles.locationDetailsMargin}></View>
          <LocationDetails {...delivery} />
        </View>

        <View style={styles.arrowContainer}>
          <ForwardArrow />
        </View>
      </View>
    </View>
  );
};

export default DispatchesListCard;
