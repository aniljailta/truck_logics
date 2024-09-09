import {call, fork, put, take} from 'redux-saga/effects';
import {forgotPasswordApi, loginApi, resetPasswordApi} from './api';
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  resetPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
  sendOtpFailure,
  sendOtpRequest,
  sendOtpSuccess,
} from './slice';
import {setStoreData} from '@/services/StorageHelper';
import {LoginResponse} from './type';

function* loginSaga(): Generator<any, void, any> {
  while (true) {
    const {payload: loginData} = yield take(loginRequest.type);
    try {
      const data: LoginResponse = yield call(loginApi, loginData);
      yield put(loginSuccess(data));

      setStoreData('access_token', data.api_token);
    } catch (error: unknown) {
      yield put(loginFailure(error));
    }
  }
}
function* forgotPasswordSaga(): Generator<any, void, any> {
  while (true) {
    const {payload: OtpRequestPayload} = yield take(sendOtpRequest.type);
    const {email, onSuccess} = OtpRequestPayload;
    try {
      yield call(forgotPasswordApi, email);
      yield put(sendOtpSuccess());
      onSuccess();
    } catch (error: unknown) {
      yield put(sendOtpFailure(error));
    }
  }
}

function* resetPasswordSaga(): Generator<any, void, any> {
  while (true) {
    const {payload: resetPasswordData} = yield take(resetPasswordRequest.type);
    const {onSuccess, ...rest} = resetPasswordData;
    try {
      yield call(resetPasswordApi, rest);
      yield put(resetPasswordSuccess());
    } catch (error: unknown) {
      yield put(resetPasswordFailure(error));
    }
  }
}

export default function* authSaga() {
  yield fork(loginSaga);
  yield fork(forgotPasswordSaga);
  yield fork(resetPasswordSaga);
}
