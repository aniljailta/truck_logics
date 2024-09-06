import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@/constants/PixelScaling';
import {appGap, appPaddings} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: appPaddings.PADDING_24,
    paddingBottom: appPaddings.PADDING_16,
    backgroundColor: 'lightgrey',
  },
  container: {
    flex: 1,
    top: SCREEN_HEIGHT * 0.2,
    alignItems: 'flex-start',
    gap: appGap.gap_32,
    width: SCREEN_WIDTH * 0.8,
    paddingHorizontal: appPaddings.PADDING_8,
  },
  headlineContainer: {
    gap: appGap.gap_32,
  },
  headlineTextContainer: {
    gap: appGap.gap_12,
  },
  headingText: {
    fontFamily: 'Inter-Bold',
    fontSize: appFontSize.FONT_32,
    color: appColor.APP_BLACK,
  },
  subHeadingText: {
    fontFamily: 'Inter-Regular',
    fontSize: appFontSize.FONT_12,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    color: appColor.APP_GREY,
  },
  loginFieldsContainer: {
    width: '100%',
    gap: appGap.gap_24,
  },
  inputFieldsContainer: {
    gap: appGap.gap_8,
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    fontSize: appFontSize.FONT_12,
    fontWeight: appFontWeight.FONT_WEIGHT_600,
    color: '#283851',
  },
});

export default styles;
