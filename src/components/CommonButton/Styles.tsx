import appColor from '@/constants/Colors';
import {appFontSize} from '@/constants/Fonts';
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from '@/constants/PixelScaling';
import {appPaddings, appRadius} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: actuatedNormalizeVertical(appPaddings.PADDING_10),
    borderRadius: appRadius.RADIUS_10,
  },
  buttonText: {
    color: appColor.WHITE,
    textAlign: 'center',
    fontSize: actuatedNormalize(appFontSize.FONT_15),
    fontFamily: 'Inter-Regular',
  },
});
export default styles;
