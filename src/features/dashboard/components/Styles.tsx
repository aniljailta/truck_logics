import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {appGap, appPaddings} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    gap: appGap.gap_16,
    paddingHorizontal: appPaddings.PADDING_24,
    paddingVertical: appPaddings.PADDING_16,
  },
  currentTripText: {
    fontSize: appFontSize.FONT_20,
    color: appColor.BLACK,
    fontWeight: appFontWeight.FONT_WEIGHT_600,
  },
});

export default styles;
