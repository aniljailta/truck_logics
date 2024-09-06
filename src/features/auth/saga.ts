import {call, fork, put, take} from 'redux-saga/effects';
import {forgotPasswordApi, loginApi, resetPasswordApi} from './api';
import {
  loginFailure,
  loginRequest,
  loginSuccess,
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
    } catch (error: any) {
      yield put(loginFailure(error));
    }
  }
}
function* forgotPasswordSaga(): Generator<any, void, any> {
  while (true) {
    const {payload: email} = yield take(sendOtpRequest.type);
    try {
      yield call(forgotPasswordApi, email);
      yield put(sendOtpSuccess());
    } catch (error: any) {
      yield sendOtpFailure(error);
    }
  }
}

function* resetPasswordSaga(): Generator<any, void, any> {
  while (true) {
    const {payload: resetPasswordData} = yield take(sendOtpRequest.type);
    try {
      yield call(resetPasswordApi, resetPasswordData);
      yield put(sendOtpSuccess());
    } catch (error: any) {
      yield sendOtpFailure(error);
    }
  }
}

export default function* authSaga() {
  yield fork(loginSaga);
  yield fork(forgotPasswordSaga);
  yield fork(resetPasswordSaga);
}
