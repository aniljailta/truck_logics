import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {appPaddings, appRadius, appWidthAndHeight} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: appColor.WHITE,
    borderBottomWidth: appWidthAndHeight.APP_WIDTH_1,
    borderBottomColor: '#e0e0e0',
    borderRadius: appRadius.RADIUS_5,
  },
  tab: {
    flex: 1,
    paddingVertical: appPaddings.PADDING_12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: appWidthAndHeight.APP_WIDTH_2,
    borderBottomColor: appColor.APP_ORANGE_COLOR,
  },
  tabText: {
    fontSize: appFontSize.FONT_14,
    color: appColor.APP_GREY,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
    fontFamily: 'Ubuntu-Medium',
  },
  activeTabText: {
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
    color: appColor.APP_ORANGE_COLOR,
  },
});

export default styles;
