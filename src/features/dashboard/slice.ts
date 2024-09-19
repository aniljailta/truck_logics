import {createSlice} from '@reduxjs/toolkit';
import {DispatchStats} from './type';

interface initialStateProps {
  dispatchStats: DispatchStats | null;
  isFetching: boolean;
  error: null;
}
const initialState: initialStateProps = {
  dispatchStats: null,
  isFetching: false,
  error: null,
};
export const dashboard = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    dashboardStatsRequest: state => {
      state.isFetching = true;
      state.error = null;
    },
    dashboardStatsSuccess: (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.dispatchStats = action.payload;
    },
    dashboardStatsFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const {
  dashboardStatsRequest,
  dashboardStatsSuccess,
  dashboardStatsFailure,
} = dashboard.actions;

export default dashboard.reducer;
