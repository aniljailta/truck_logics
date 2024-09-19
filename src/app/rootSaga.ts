import {all} from 'redux-saga/effects';
import authSaga from '@/features/auth/saga';
import dashboardSaga from '@/features/dashboard/saga';

function* rootSaga() {
  yield all([authSaga(), dashboardSaga()]);
}

export default rootSaga;
