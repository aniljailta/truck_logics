import {call, fork, put, take} from 'redux-saga/effects';
import {
  dispatchDetailByIdFailure,
  dispatchDetailByIdRequest,
  dispatchDetailByIdSuccess,
  dispatchListFailure,
  dispatchListRequest,
  dispatchListSuccess,
  uploadDocumentFailure,
  uploadDocumentRequest,
  uploadDocumentSuccess,
} from './slice';
import {dispatchesByIdApi, dispatchesListApi, uploadDocumentsApi} from './api';
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
    const {payload: id} = yield take(dispatchDetailByIdRequest.type);
    try {
      const data: Dispatch = yield call(dispatchesByIdApi, id);
      yield put(dispatchDetailByIdSuccess(data));
    } catch (error: any) {
      yield put(dispatchDetailByIdFailure(error.message || 'Unknown error'));
    }
  }
}
function* uploadDocumentSaga(): Generator<any, void, any> {
  while (true) {
    const {payload: formData} = yield take(uploadDocumentRequest.type);
    console.log('form data', formData);
    
    try {
      yield call(uploadDocumentsApi, formData);
      yield put(uploadDocumentSuccess());
    } catch (error: any) {
      yield put(uploadDocumentFailure(error.message || 'Unknown error'));
    }
  }
}
export default function* dashboardSaga() {
  yield fork(getDispatchesList);
  yield fork(getDispatchById);
  yield fork(uploadDocumentSaga)
}
