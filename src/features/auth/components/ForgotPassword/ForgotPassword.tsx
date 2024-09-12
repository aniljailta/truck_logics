import {
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React from 'react';
import styles from '../Login/Style';
import {keyboardScroller} from '@/helpers/utility';
import {SCREEN_WIDTH} from '@/constants/PixelScaling';
import TrendLogo from '@/assets/svg/TrendLogo';
import {authConstants} from '@/constants/StringConstants';
import {appGap} from '@/constants/Styles';
import CommonInput from '@/components/ComonInput/CommonInput';
import {useForm} from 'react-hook-form';
import CommonButton from '@/components/CommonButton/CommonButton';

type ForgotPasswordFormData = {
  email: string;
};
const ForgotPassword = () => {
  const {control, handleSubmit} = useForm<ForgotPasswordFormData>({
    defaultValues: {
      email: 'rtanvi79@gmail.com',
    },
  });

  const onForgotPassword = () => {};
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={keyboardScroller}>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <View style={styles.headlineContainer}>
              <View style={{marginLeft: -35}}>
                <TrendLogo width={SCREEN_WIDTH * 0.55} height={72} />
              </View>
              <View style={styles.headlineTextContainer}>
                <Text style={styles.headingText}>
                  {authConstants.FORGOT_PASSWORD}
                </Text>
                <Text>{authConstants.SIGN_IN_SUB_HEADING} </Text>
              </View>
            </View>
            <View style={styles.loginFieldsContainer}>
              <View style={{gap: appGap.gap_16}}>
                <View style={styles.inputFieldsContainer}>
                  <CommonInput
                    control={control}
                    name="email"
                    placeholder="Email"
                    rules={{
                      required: true,
                      pattern: {
                        value: authConstants.EMAIL_REGEX,
                        message: 'Please enter valid email',
                      },
                    }}
                  />
                  <CommonInput
                    control={control}
                    name="password"
                    placeholder="Password"
                    rules={{
                      required: true,
                      pattern: {
                        value: authConstants.PASSWORD_REGEX,
                        message: 'Password must be of 8 characters',
                      },
                    }}
                    isSecureEntry
                  />
                </View>
                <Text style={styles.forgotPasswordText}>
                  {authConstants.FORGOT_PASSWORD_TEXT}
                </Text>
              </View>
              <CommonButton
                title={'Send'}
                onPress={handleSubmit(onForgotPassword)}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;
