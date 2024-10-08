import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {appGap, appPaddings, appWidthAndHeight} from '@/constants/Styles';
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
});

export default styles;
