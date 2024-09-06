import {Text, StyleSheet, Pressable, ActivityIndicator} from 'react-native';
import React from 'react';
import appColor from '@/constants/Colors';
import {appPaddings, appRadius} from '@/constants/Styles';
import {appFontSize} from '@/constants/Fonts';
import {
  actuatedNormalize,
  actuatedNormalizeVertical,
} from '@/constants/PixelScaling';

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
export default CommonButton;
