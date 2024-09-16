import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {
  appGap,
  appMargins,
  appPaddings,
  appRadius,
  appWidthAndHeight,
} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: appGap.gap_16,
    paddingHorizontal: appPaddings.PADDING_24,
    paddingVertical: appPaddings.PADDING_16,
  },
  currentTripText: {
    fontSize: appFontSize.FONT_22,
    color: appColor.BLACK,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    paddingBottom: appPaddings.PADDING_10,
  },
  mapImage: {
    height: appWidthAndHeight.APP_HEIGHT_220,
  },
  dispatchesColumn: {
    flexDirection: 'column',
    gap: appGap.gap_20,
  },
  dispatchesRow: {
    flexDirection: 'row',
    gap: appGap.gap_20,
    justifyContent: 'center',
  },
  locationDot: {
    width: appWidthAndHeight.APP_WIDTH_20,
    height: appWidthAndHeight.APP_HEIGHT_20,
    borderRadius: appRadius.RADIUS_50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickupDot: {
    backgroundColor: appColor.BUTTON_SECONDARY_COLOR,
  },
  destinationDot: {
    backgroundColor: 'transparent',
  },
  dottedLineContainer: {
    alignItems: 'center',
    marginVertical: appMargins.MARGIN_5,
  },
  dot: {
    backgroundColor: '#A7A7A7',
    height: 3,
    width: 3,
    borderRadius: appRadius.RADIUS_2,
    marginBottom: appMargins.MARGIN_6,
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: appMargins.MARGIN_10,
  },
  locationIconsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dateTimeText: {
    marginLeft: appMargins.MARGIN_5,
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    fontFamily: 'Ubuntu-Medium',
    color: appColor.APP_GREY,
  },
});

export default styles;
