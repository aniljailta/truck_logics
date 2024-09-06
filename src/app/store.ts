import createSagaMiddleware from '@redux-saga/core';
import {configureStore, Tuple} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {useDispatch} from 'react-redux';
import reactotron from '../../ReactotronConfig';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(sagaMiddleware),
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat(reactotron.createEnhancer()),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof rootReducer>;

export default store;
