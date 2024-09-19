import {call, fork, put, take} from 'redux-saga/effects';
import {
  dashboardStatsFailure,
  dashboardStatsRequest,
  dashboardStatsSuccess,
} from './slice';
import {dispatchStatsApi} from './api';
import {DispatchStats} from './type';

function* getDispatchStats(): Generator<any, void, any> {
  while (true) {
    yield take(dashboardStatsRequest.type);
    try {
      const data: DispatchStats = yield call(dispatchStatsApi);
      yield put(dashboardStatsSuccess(data));
    } catch (error: any) {
      yield put(dashboardStatsFailure(error.message || 'Unknown error'));
    }
  }
}

export default function* dashboardSaga() {
  yield fork(getDispatchStats);
}
