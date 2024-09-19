import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '@/features/auth/slice';
import dashboardReducer from '@/features/dashboard/slice';

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
