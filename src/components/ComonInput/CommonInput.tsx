import {
  KeyboardTypeOptions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {appBorderWidth, appPaddings, appRadius} from '@/constants/Styles';
import appColor from '@/constants/Colors';
import {Control, Controller} from 'react-hook-form';
import PasswordEyeOff from '@/assets/svg/PasswordEyeOff';
import {appFontSize, appFontWeight} from '@/constants/Fonts';
import {actuatedNormalizeVertical} from '@/constants/PixelScaling';
import styles from './Styles';

type InputProps = {
  name: string;
  control: Control<any>;
  isSecureEntry?: boolean;
  placeholder: string;
  rules?: any;
  defaultValue?: string;
  keyboardType?: KeyboardTypeOptions;
};
const CommonInput: React.FC<InputProps> = ({
  name,
  rules,
  control,
  placeholder,
  isSecureEntry = false,
  defaultValue = '',
  keyboardType = 'default',
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
                ref={textInputRef}
                defaultValue={defaultValue}
                keyboardType={keyboardType}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={placeholder}
                placeholderTextColor={appColor.APP_BLACK}
                secureTextEntry={isSecureEntry}
                style={styles.inputStyle}
                onChangeText={(inputValue: string) => onChange(inputValue)}
                value={defaultValue ? defaultValue : value}
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

export default CommonInput;
