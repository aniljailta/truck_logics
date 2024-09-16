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
  card: {
    backgroundColor: appColor.WHITE,
    borderRadius: appFontSize.FONT_12,
    padding: appPaddings.PADDING_16,
    shadowColor: appColor.BLACK,
    shadowOffset: {width: 0, height: appWidthAndHeight.APP_HEIGHT_2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  headingText: {
    fontSize: appFontSize.FONT_16,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    fontFamily: 'Ubuntu-Medium',
    color: appColor.BUTTON_SECONDARY_COLOR,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: appMargins.MARGIN_16,
  },

  infoContainer: {
    borderRadius: appRadius.RADIUS_5,
    borderColor: appColor.APP_GREY,
    borderWidth: appWidthAndHeight.APP_WIDTH_1,
    marginBottom: appMargins.MARGIN_10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: appMargins.MARGIN_10,
  },
  infoText: {
    marginLeft: appMargins.MARGIN_8,
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
    fontFamily: 'Ubuntu-Medium',
    color: appColor.APP_GREY,
  },
  mapImage: {
    width: '100%',
    height: 250,
    borderRadius: appRadius.RADIUS_8,
  },
});

export default styles;
