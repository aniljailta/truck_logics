import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {keyboardScroller} from '@/helpers/utility';
import styles from '../Login/Style';
import TrendLogo from '@/assets/svg/TrendLogo';
import {SCREEN_WIDTH} from '@/constants/PixelScaling';
import {appGap} from '@/constants/Styles';
import CommonInput from '@/components/CommonInput';
import {useForm} from 'react-hook-form';
import CommonButton from '@/components/CommonButton';
import {authConstants} from '@/constants/StringConstants';
import {useAppSelector} from '@/hooks/ReduxHooks';
import {ResetPasswordRequestPayload} from '../../type';
import ImageView from '@/components/ImageView';

export type ResetPasswordFormData = Omit<
  ResetPasswordRequestPayload,
  'onSuccess'
>;

const ResetPassword = () => {
  const {userEmail} = useAppSelector(state => state.auth);

  const {control, handleSubmit} = useForm<ResetPasswordFormData>({
    defaultValues: {
      email: userEmail || '',
    },
  });

  const onReset = (formData: ResetPasswordFormData) => {
    console.log('form data', formData);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={keyboardScroller}>
        <ImageView>
          <View style={styles.wrapper}>
            <View style={styles.container}>
              <View style={styles.headlineContainer}>
                <View style={{marginLeft: -35}}>
                  <TrendLogo width={SCREEN_WIDTH * 0.55} height={72} />
                </View>
                <View style={styles.headlineTextContainer}>
                  <Text style={styles.headingText}>Reset your Password</Text>
                  <Text>
                    You are resetting your password for your account. Please
                    enter your new password below:
                  </Text>
                </View>
              </View>
              <View style={styles.loginFieldsContainer}>
                <View style={{gap: appGap.gap_16}}>
                  <View style={styles.inputFieldsContainer}>
                    <CommonInput
                      control={control}
                      name="email"
                      placeholder="Email"
                      defaultValue={userEmail}
                      rules={{
                        pattern: {
                          value: authConstants.EMAIL_REGEX,
                          message: 'Please enter valid email',
                        },
                      }}
                    />
                    <CommonInput
                      control={control}
                      name="otp"
                      keyboardType="numeric"
                      placeholder="Otp.."
                      rules={{
                        required: true,
                      }}
                    />
                    <CommonInput
                      control={control}
                      name="password"
                      placeholder="New Password"
                      rules={{
                        required: true,
                        pattern: {
                          value: authConstants.PASSWORD_REGEX,
                          message: 'Password must be of 8 characters',
                        },
                      }}
                      isSecureEntry
                    />
                    <CommonInput
                      control={control}
                      name="password_confirmation"
                      placeholder="Confirm Password"
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
                </View>
                <CommonButton title={'Reset'} onPress={handleSubmit(onReset)} />
              </View>
            </View>
          </View>
        </ImageView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ResetPassword;
