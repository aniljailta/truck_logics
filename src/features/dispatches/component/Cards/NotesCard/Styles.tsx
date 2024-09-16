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
    fontSize: appFontSize.FONT_16,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    color: appColor.BUTTON_SECONDARY_COLOR,
    fontFamily: 'Ubuntu-Medium',
    marginLeft: appMargins.MARGIN_8,
  },
  addButton: {
    backgroundColor: appColor.BUTTON_SECONDARY_COLOR,
    borderRadius: appRadius.RADIUS_50,
    padding: appPaddings.PADDING_8,
  },

  noteDetailHeading: {
    fontSize: appFontSize.FONT_12,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
    marginBottom: appMargins.MARGIN_8,
    color: appColor.BUTTON_SECONDARY_COLOR,
    fontFamily: 'Ubuntu-Medium',
  },
  noteDetailsSubheading: {
    fontSize: appFontSize.FONT_12,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
    marginBottom: appMargins.MARGIN_8,
    color: appColor.APP_GREY,
    fontFamily: 'Ubuntu-Medium',
  },
});

export default styles;
