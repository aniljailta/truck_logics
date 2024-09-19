import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '@/features/auth/slice';
import dashboardReducer from '@/features/dashboard/slice';
import dispatchReducer from '@/features/dispatches/slice';

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  dispatch: dispatchReducer,
});

export default rootReducer;
