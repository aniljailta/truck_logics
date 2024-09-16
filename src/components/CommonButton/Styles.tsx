import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from '@/constants/PixelScaling';
import {appPaddings, appRadius} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: actuatedNormalizeVertical(appPaddings.PADDING_14),
    borderRadius: appRadius.RADIUS_10,
  },
  buttonText: {
    color: appColor.WHITE,
    textAlign: 'center',
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    fontSize: actuatedNormalize(appFontSize.FONT_14),
    fontFamily: 'Ubuntu-Medium',
  },
});
export default styles;
