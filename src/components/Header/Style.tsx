import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {appGap, appRadius, appWidthAndHeight} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: appGap.gap_8,
  },
  avatar: {
    height: appWidthAndHeight.APP_HEIGHT_54,
    width: appWidthAndHeight.APP_WIDTH_54,
    borderRadius: appRadius.RADIUS_60,
    objectFit: 'fill',
  },
  titleText: {
    fontSize: appFontSize.FONT_16,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    color: appColor.BLACK,
    fontFamily: 'Ubuntu-Medium',
  },
  emailText: {
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
    color: '#7D7D7D',
    fontFamily: 'Ubuntu-Medium',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: appGap.gap_10,
  },
  headerText: {
    fontSize: appFontSize.FONT_18,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    color: appColor.BLACK,
    fontFamily: 'Ubuntu-Medium',
  },
});

export default styles;
