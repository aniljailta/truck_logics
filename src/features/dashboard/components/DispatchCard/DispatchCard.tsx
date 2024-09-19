import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import styles from './Styles';
import {appFontSize, appFontWeight} from '@/constants/Fonts';

const DispatchCard = ({
  title,
  count,
  color,
  icon,
}: {
  title: string;
  count: number | undefined;
  color: string;
  icon: ReactNode;
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.iconContainer, {backgroundColor: color}]}>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.cardText, {color}]}>{title}</Text>
        <Text
          style={[
            styles.cardText,
            {
              fontSize: appFontSize.FONT_24,
              fontWeight: appFontWeight.FONT_WEIGHT_700,
              color,
            },
          ]}>
          {count !== undefined ? count : '-'}
        </Text>
      </View>
    </View>
  );
};

export default DispatchCard;
