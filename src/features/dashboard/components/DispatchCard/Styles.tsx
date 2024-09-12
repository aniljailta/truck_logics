import appColor from '@/constants/Colors';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {appBorderWidth, appGap, appPaddings, appRadius} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: 180,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    gap: appGap.gap_8,
    backgroundColor: 'white',
    borderRadius: appRadius.RADIUS_15,

    shadowColor: appColor.BLACK,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 5,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
   alignItems:'center',
   justifyContent:'center'
  },
  textContainer: {
  flexDirection: 'column',
  

  },
  cardText: {
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    textAlign: 'center',
    marginBottom:0,
    fontFamily:"Ubuntu-Medium"

  },
});

export default styles;
