import RequestService from '@/services/RequestService';
import Toast from 'react-native-toast-message';
import {LoginFormData} from './type';
import handleApiError from '@/helpers/errorHandling';
import {ResetPasswordFormData} from './components/ResetPassword/ResetPassword';

async function loginApi(loginCreds: LoginFormData) {
  try {
    const response = await RequestService.post('login', loginCreds);
    if (response && response.status === 200) {
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
        text2: 'You have logged in successfully !',
      });
      return response.data;
    }
  } catch (e: unknown) {
    return handleApiError(e);
  }
}

async function forgotPasswordApi(email: string) {
  try {
    const response = await RequestService.post('forgot-password', {email});
    if (response && response.status === 200) {
      Toast.show({
        type: 'success',
        text1: response.data.message.split('.')[0],
        text2: response.data.message.split('.')[1],
      });
    }
  } catch (e: unknown) {
    return handleApiError(e);
  }
}
async function resetPasswordApi(resetPasswordData: ResetPasswordFormData) {
  try {
    const response = await RequestService.post(
      'reset-password',
      resetPasswordData,
    );
    if (response && response.status === 200) {
      Toast.show({
        type: 'success',
        text1: 'Password reset successful !',
        text2: response.data.message,
      });
    }
  } catch (e: unknown) {
    console.error('error', e);
  }
}

export {loginApi, forgotPasswordApi, resetPasswordApi};
