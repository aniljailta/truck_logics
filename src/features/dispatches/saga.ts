import {call, fork, put, take} from 'redux-saga/effects';
import {
  dispatchListFailure,
  dispatchListRequest,
  dispatchListSuccess,
} from './slice';
import {dispatchesByIdApi, dispatchesListApi} from './api';
import {Dispatch} from '@reduxjs/toolkit';

function* getDispatchesList(): Generator<any, void, any> {
  while (true) {
    yield take(dispatchListRequest.type);
    try {
      const data: Dispatch = yield call(dispatchesListApi);
      yield put(dispatchListSuccess(data));
    } catch (error: any) {
      yield put(dispatchListFailure(error.message || 'Unknown error'));
    }
  }
}
function* getDispatchById(): Generator<any, void, any> {
  while (true) {
    const {payload: id} = yield take(dispatchListRequest.type);
    try {
      const data: Dispatch = yield call(dispatchesByIdApi, id);
      yield put(dispatchListSuccess(data));
    } catch (error: any) {
      yield put(dispatchListFailure(error.message || 'Unknown error'));
    }
  }
}
export default function* dashboardSaga() {
  yield fork(getDispatchesList);
  yield fork(getDispatchById);
}
