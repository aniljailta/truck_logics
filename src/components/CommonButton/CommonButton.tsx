import appColor from '@/constants/Colors';
import React from 'react';
import {ActivityIndicator, Pressable, Text} from 'react-native';
import styles from './Styles';

type ButtonProps = {
  title: string;
  color?: string;
  onPress: () => void;
  isLoading?: boolean;
};
const CommonButton: React.FC<ButtonProps> = ({
  title,
  color = appColor.BUTTON_COLOR,
  onPress,
  isLoading,
}) => {
  return (
    <Pressable
      disabled={isLoading}
      onPress={onPress}
      style={[styles.buttonContainer, {backgroundColor: color}]}>
      {!isLoading ? (
        <Text style={styles.buttonText}>{title}</Text>
      ) : (
        <ActivityIndicator size="small" color={appColor.WHITE} />
      )}
    </Pressable>
  );
};

export default CommonButton;
