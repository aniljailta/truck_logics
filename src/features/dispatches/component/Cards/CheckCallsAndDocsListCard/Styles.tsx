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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: appMargins.MARGIN_16,
  },
  titleContainer: {flexDirection: 'row', alignItems: 'center'},
  title: {
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    color: appColor.BUTTON_SECONDARY_COLOR,
    fontFamily: 'Ubuntu-Medium',
    marginLeft: appMargins.MARGIN_8,
    flex: 0.8,
  },
  iconContainer: {
    marginHorizontal: appMargins.MARGIN_4,
    borderRadius: appRadius.RADIUS_20,
    padding: 6,
  },
  dateTimeContainer: {
    flexDirection: 'row',
  },
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
  docDescription: {
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
    marginLeft: appMargins.MARGIN_8,
    color: appColor.APP_GREY,
  },
});

export default styles;
