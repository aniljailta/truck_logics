import RequestService from '@/services/RequestService';
import Toast from 'react-native-toast-message';
import {LoginFormData} from './type';

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
  } catch (e) {
    console.error('login error', e);
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
  } catch (e) {
    console.error('error', e);
  }
}
async function resetPasswordApi(resetPasswordData: unknown) {
  try {
    const response = await RequestService.post(
      'reset-password',
      resetPasswordData,
    );
    if (response && response.status === 200) {
      Toast.show({
        type: 'success',
        text1: 'Password reset mail sent !',
        text2: response.data.message,
      });
    }
  } catch (e) {
    console.error('error', e);
  }
}

export {loginApi, forgotPasswordApi, resetPasswordApi};
