import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {appBorderWidth, appPaddings, appRadius} from '@/constants/Styles';
import appColor from '@/constants/Colors';
import {Control, Controller} from 'react-hook-form';
import PasswordEyeOff from '@/assets/svg/PasswordEyeOff';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {actuatedNormalizeVertical} from '@/constants/PixelScaling';

type InputProps = {
  name: string;
  control: Control<any>;
  isSecureEntry?: boolean;
  placeholder: string;
  rules?: any;
};
const CommonInput: React.FC<InputProps> = ({
  name,
  rules,
  control,
  placeholder,
  isSecureEntry = false,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const textInputRef = useRef<TextInput>(null);
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, value}, fieldState: {error}}) => {
        return (
          <Pressable onPress={() => textInputRef.current?.focus()}>
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={placeholder}
                placeholderTextColor={appColor.APP_BLACK}
                secureTextEntry={isSecureEntry}
                style={styles.inputStyle}
                onChangeText={(inputValue: string) => onChange(inputValue)}
                value={value}
              />
              {isSecureEntry && (
                <Pressable onPress={() => setShowPassword(prev => !prev)}>
                  <PasswordEyeOff />
                </Pressable>
              )}
            </View>
            {error && (
              <Text style={styles.validationError}>
                {error.message || 'Required!'}
              </Text>
            )}
          </Pressable>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    backgroundColor: appColor.WHITE,
    height: 46,
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
    // alignSelf: 'stretch',
  },
});

export default CommonInput;
