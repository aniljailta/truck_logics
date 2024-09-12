import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {actuatedNormalizeVertical} from '@/constants/PixelScaling';
import {
  appBorderWidth,
  appPaddings,
  appRadius,
  appWidthAndHeight,
} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    backgroundColor: appColor.WHITE,
    height: appWidthAndHeight.APP_HEIGHT_44,
    borderWidth: appBorderWidth.width_1,
    borderColor: appColor.INPUT_BORDER_COLOR,
    borderRadius: appRadius.RADIUS_10,
    paddingHorizontal: appPaddings.PADDING_14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
    color: appColor.APP_BLACK,
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    alignSelf: 'stretch',
  },
  validationError: {
    color: appColor.VALIDATION_COLOR,
    padding: actuatedNormalizeVertical(appPaddings.PADDING_4),
  },
});
export default styles;
