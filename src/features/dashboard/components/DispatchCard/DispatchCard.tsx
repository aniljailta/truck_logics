import {View, Text} from 'react-native';
import React from 'react';
import styles from './Styles';
import {appFontSize, appFontWeight} from '@/constants/Fonts';

const DispatchCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.iconContainer}>
        <View></View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.cardText}>Pickup</Text>
        <Text
          style={[
            styles.cardText,
            {
              fontSize: appFontSize.FONT_24,
              fontWeight: appFontWeight.FONT_WEIGHT_700,
            },
          ]}>
          25
        </Text>
      </View>
    </View>
  );
};

export default DispatchCard;
