import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {
  appMargins,
  appPaddings,
  appRadius,
  appWidthAndHeight,
} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColor.WHITE,
    height: appWidthAndHeight.APP_HEIGHT_40,
    width: '90%',
    paddingHorizontal: appPaddings.PADDING_10,
    zIndex: 1,
    borderRadius: appRadius.RADIUS_10,
  },
  buttonText: {
    flex: 1,
    textAlign: 'left',
    marginLeft: appMargins.MARGIN_10,
    color: appColor.APP_GREY,
    marginRight: appMargins.MARGIN_5,
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_400,
    fontFamily: 'Ubuntu-Medium',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '90%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: appPaddings.PADDING_10,
    paddingVertical: appPaddings.PADDING_10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});
export default styles;
