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
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
  content: {
    marginBottom: appMargins.MARGIN_16,
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
  viewAllButtonContainer: {
    alignItems: 'flex-start',
  },
  viewAllButton: {
    backgroundColor: appColor.BUTTON_COLOR,
    padding: appPaddings.PADDING_10,
    borderRadius: appRadius.RADIUS_5,
    alignItems: 'center',
    width: appWidthAndHeight.APP_WIDTH_80,
  },
  viewAllText: {
    color: appColor.WHITE,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
    fontSize: appFontSize.FONT_14,
    fontFamily: 'Ubuntu-Medium',
  },
  dtaeTimeContainer: {
    flexDirection: 'row',
    marginTop: appMargins.MARGIN_16,
  },
});

export default styles;
