import React from 'react';
import {View, Image, Text} from 'react-native';
import PickupLocationIcon from '@/assets/svg/PickupLocationIcon';
import DestinationIcon from '@/assets/svg/DestinationIcon';
import DateIcon from '@/assets/svg/DateIcon';
import TimeIcon from '@/assets/svg/TimeIcon';
import ForwardArrow from '@/assets/svg/ForwardArrow';
import {appMargins} from '@/constants/Styles';
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
  isDetailScreen?: boolean;
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

const LocationDetails: React.FC<
  LocationInfo & {isDetailScreen?: boolean; isPickup?: boolean}
> = ({location, date, time, isDetailScreen, isPickup}) => (
  <View style={styles.locationDetailsContainer}>
    {isDetailScreen ? (
      <>
        <Text style={styles.dateTimeText}>
          {isPickup ? 'Pickup' : 'Delivery'}
        </Text>
        <Text style={styles.locationText}>{location}</Text>
      </>
    ) : (
      <>
        <Text style={styles.locationText}>{location}</Text>
        <View style={styles.dateTimeContainer}>
          <View style={styles.iconTextContainer}>
            <DateIcon />
            <Text
              style={[styles.dateTimeText, {marginLeft: appMargins.MARGIN_5}]}>
              {date}
            </Text>
          </View>
          <View style={styles.iconTextContainer}>
            <TimeIcon />
            <Text
              style={[styles.dateTimeText, {marginLeft: appMargins.MARGIN_5}]}>
              {time}
            </Text>
          </View>
        </View>
      </>
    )}
  </View>
);

const DispatchesListCard: React.FC<DispatchesListCardProps> = ({
  dispatchNumber,
  status,
  pickup,
  delivery,
  isDetailScreen,
}) => {
  return (
    <View style={styles.cardContainer}>
      {!isDetailScreen && (
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
      )}

      <View style={styles.contentContainer}>
        <View style={styles.locationIconsContainer}>
          <LocationDot isPickup={true} />
          <DottedLine />
          <LocationDot isPickup={false} />
        </View>

        <View style={styles.locationsContainer}>
          <LocationDetails
            {...pickup}
            isDetailScreen={isDetailScreen}
            isPickup={true}
          />
          <View style={styles.locationDetailsMargin}></View>
          <LocationDetails
            {...delivery}
            isDetailScreen={isDetailScreen}
            isPickup={false}
          />
        </View>

        {!isDetailScreen && (
          <View style={styles.arrowContainer}>
            <ForwardArrow />
          </View>
        )}
      </View>
    </View>
  );
};

export default DispatchesListCard;
