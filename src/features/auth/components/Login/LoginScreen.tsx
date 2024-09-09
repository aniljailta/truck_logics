import {useForm} from 'react-hook-form';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from 'react-native';
import {LoginFormData} from '../../type';
import {useAppDispatch} from '@/app/store';
import {loginRequest, sendOtpRequest} from '../../slice';
import styles from './Style';
import TrendLogo from '@/assets/svg/TrendLogo';
import {authConstants} from '@/constants/StringConstants';
import CommonInput from '@/components/CommonInput';
import {appGap} from '@/constants/Styles';
import {keyboardScroller} from '@/helpers/utility';
import CommonButton from '@/components/CommonButton';
import {SCREEN_WIDTH} from '@/constants/PixelScaling';
import {useAppNavigation, useAppSelector} from '@/hooks/ReduxHooks';
import {useState} from 'react';

const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const {isFetching} = useAppSelector(state => state.auth);

  const [isLoginScreen, setIsLoginScreen] = useState<boolean>(true);

  const {control, handleSubmit} = useForm<LoginFormData>({
    defaultValues: {
      email: 'rtanvi79@gmail.com',
      password: 'password',
    },
  });

  const onSubmit = (loginFormData: LoginFormData) => {
    if (isLoginScreen) {
      dispatch(loginRequest(loginFormData));
    } else {
      dispatch(
        sendOtpRequest({
          email: loginFormData.email,
          onSuccess: () => {
            navigation.navigate('ResetPassword');
          },
        }),
      );
    }
  };
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
                  {isLoginScreen
                    ? authConstants.SIGN_IN_HEADING
                    : authConstants.FORGOT_PASSWORD}
                </Text>
                <Text>
                  {isLoginScreen
                    ? authConstants.SIGN_IN_SUB_HEADING
                    : authConstants.FORGOT_PASSWORD_SUB_HEADING}{' '}
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
                    rules={{
                      required: true,
                      pattern: {
                        value: authConstants.EMAIL_REGEX,
                        message: 'Please enter valid email',
                      },
                    }}
                  />
                  {isLoginScreen && (
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
                  )}
                </View>
                {isLoginScreen && (
                  <Pressable onPress={() => setIsLoginScreen(prev => !prev)}>
                    <Text style={styles.forgotPasswordText}>
                      {authConstants.FORGOT_PASSWORD_TEXT}
                    </Text>
                  </Pressable>
                )}
              </View>
              <CommonButton
                title={isLoginScreen ? authConstants.LOGIN_TEXT : 'Send'}
                onPress={handleSubmit(onSubmit)}
                isLoading={isFetching}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
