import appColor from '@/constants/Colors';
import {Platform} from 'react-native';

export const keyboardScroller = Platform.OS === 'ios' ? 'padding' : 'height';
export type StatusType =
  | 'at_shipper'
  | 'starting_trip'
  | 'pickup_complete'
  | 'enroute'
  | 'at_consignee'
  | 'drop_off_complete'
  | string;

export const getStatusTextColor = (status: StatusType) => {
  switch (status.toLowerCase()) {
    case 'at_shipper' || 'pickup_complete':
      return appColor.STATUS_TEXT_COLOR1;
    case 'enroute' || 'starting_trip':
      return appColor.STATUS_TEXT_COLOR2;
    case 'at_consignee' || 'drop_off_complete':
      return appColor.STATUS_TEXT_COLOR3;

    default:
      return 'gray';
  }
};
export const getStatusBadgeColor = (status: StatusType) => {
  switch (status.toLowerCase()) {
    case 'at_shipper' || 'pickup_complete':
      return appColor.STATUS_BADGE_COLOR1;
    case 'enroute' || 'starting_trip':
      return appColor.STATUS_BADGE_COLOR2;
    case 'at_consignee' || 'drop_off_complete':
      return appColor.STATUS_BADGE_COLOR3;

    default:
      return 'gray';
  }
};
export const formatDateTime = (dateTimeString: string) => {
  const date = new Date(dateTimeString);
  const formattedDate = date.toISOString().split('T')[0];
  const formattedTime = date
    .toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    .toLowerCase();

  return {formattedDate, formattedTime};
};
