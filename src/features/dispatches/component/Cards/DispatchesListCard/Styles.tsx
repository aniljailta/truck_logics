import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {
  appMargins,
  appPaddings,
  appRadius,
  appWidthAndHeight,
} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColor.WHITE,
    borderRadius: appRadius.RADIUS_15,
    shadowColor: appColor.BLACK,
    shadowOffset: {
      width: appWidthAndHeight.APP_WIDTH_4,
      height: appWidthAndHeight.APP_HEIGHT_4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 5,
    padding: appPaddings.PADDING_15,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  dispatchInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dispatchIcon: {
    height: appWidthAndHeight.APP_HEIGHT_40,
    width: appWidthAndHeight.APP_WIDTH_40,
    marginRight: appMargins.MARGIN_10,
  },
  dispatchNumberText: {
    fontSize: appFontSize.FONT_16,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    color: appColor.BLACK,
    fontFamily: 'Ubuntu-Medium',
  },
  statusBadge: {
    borderRadius: appRadius.RADIUS_20,
    paddingHorizontal: appPaddings.PADDING_10,
    paddingVertical: appPaddings.PADDING_5,
  },
  statusText: {
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
    fontFamily: 'Ubuntu-Medium',
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: appMargins.MARGIN_10,
  },
  locationIconsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
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
  locationsContainer: {
    flex: 1,
    marginLeft: appMargins.MARGIN_10,
  },
  locationDetailsContainer: {
    marginBottom: appMargins.MARGIN_10,
  },
  locationDetailsMargin: {
    marginVertical: appMargins.MARGIN_10,
  },
  locationText: {
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    color: appColor.BLACK,
    fontFamily: 'Ubuntu-Medium',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    marginTop: appMargins.MARGIN_5,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: appRadius.RADIUS_10,
  },
  dateTimeText: {
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    fontFamily: 'Ubuntu-Medium',
    color: appColor.APP_GREY,
  },
  arrowContainer: {
    justifyContent: 'flex-end',
    paddingBottom: appPaddings.PADDING_10,
  },
});

export default styles;
