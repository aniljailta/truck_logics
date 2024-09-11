import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {appBorderWidth, appGap, appRadius} from '@/constants/Styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: 185,
    height: 145,
    justifyContent: 'center',
    alignItems: 'center',
    gap: appGap.gap_8,
    backgroundColor: 'white',
    borderRadius: appRadius.RADIUS_15,

    shadowColor: '#000000',
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
    backgroundColor: '#245F75',
  },
  textContainer: {
    // gap: appGap.gap_4,
  },
  cardText: {
    fontSize: appFontSize.FONT_14,
    fontWeight: appFontWeight.FONT_WEIGHT_500,
    textAlign: 'center',
    color: '#245F75',
  },
});

export default styles;
