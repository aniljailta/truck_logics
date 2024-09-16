import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {
  appGap,
  appMargins,
  appPaddings,
  appRadius,
  appWidthAndHeight,
} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: appRadius.RADIUS_5,
    padding: appPaddings.PADDING_20,
    width: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: appMargins.MARGIN_8,
  },
  title: {
    fontSize: appFontSize.FONT_16,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    color: appColor.BUTTON_SECONDARY_COLOR,
    fontFamily: 'Inter-Medium',
  },

  label: {
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
    color: appColor.BLACK,
    marginBottom: appMargins.MARGIN_5,
    fontFamily: 'Inter-Medium',
  },
  input: {
    borderWidth: 1,
    borderColor: appColor.APP_GREY,
    borderRadius: appRadius.RADIUS_5,
    padding: appPaddings.PADDING_10,
    marginBottom: appMargins.MARGIN_16,
  },
  textArea: {
    height: appWidthAndHeight.APP_HEIGHT_100,
    textAlignVertical: 'top',
  },
  row: {flexDirection: 'row', alignItems: 'center', gap: appGap.gap_10},
  button: {
    padding: appPaddings.PADDING_15,
    borderRadius: appMargins.MARGIN_10,
    alignItems: 'center',
    marginBottom: appMargins.MARGIN_16,
  },
  buttonText: {
    color: appColor.WHITE,
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
  },
  divider: {
    backgroundColor: '#DFDFDF',
    height: appWidthAndHeight.APP_WIDTH_2,
    width: '100%',
    marginVertical: appMargins.MARGIN_10,
  },
});

export default styles;
