import {all} from 'redux-saga/effects';
import authSaga from '@/features/auth/saga';
import dashboardSaga from '@/features/dashboard/saga';
import dispatchSaga from '@/features/dispatches/saga';

function* rootSaga() {
  yield all([authSaga(), dashboardSaga(), dispatchSaga()]);
}

export default rootSaga;
