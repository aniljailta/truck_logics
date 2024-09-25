import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {appGap, appRadius, appWidthAndHeight} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: appWidthAndHeight.APP_WIDTH_180,
    height: appWidthAndHeight.APP_HEIGHT_140,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: appGap.gap_8,
    backgroundColor: appColor.WHITE,
    borderRadius: appRadius.RADIUS_15,

    shadowColor: appColor.BLACK,
    shadowOffset: {
      width: appWidthAndHeight.APP_WIDTH_4,
      height: appWidthAndHeight.APP_HEIGHT_4,
    },
    shadowOpacity: 0.08,
    elevation: 5,
  },
  iconContainer: {
    width: appWidthAndHeight.APP_WIDTH_52,
    height: appWidthAndHeight.APP_HEIGHT_52,
    borderRadius: appRadius.RADIUS_26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'column',
  },
  cardText: {
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    textAlign: 'center',
    marginBottom: 0,
    fontFamily: 'Ubuntu-Medium',
  },
});

export default styles;
