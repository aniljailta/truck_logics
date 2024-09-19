import {createSlice} from '@reduxjs/toolkit';
import {Dispatch} from './type';

interface initialStateProps {
  dispatches: Dispatch[];
  dispatchesDetail: Dispatch | null;
  isFetching: boolean;
  error: null;
}
const initialState: initialStateProps = {
  dispatches: [],
  dispatchesDetail: null,
  isFetching: false,
  error: null,
};
export const dispatch = createSlice({
  name: 'dispatch',
  initialState,
  reducers: {
    dispatchListRequest: state => {
      state.isFetching = true;
      state.error = null;
    },
    dispatchListSuccess: (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.dispatches = action.payload;
    },
    dispatchListFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    dispatchByIdRequest: (state, action) => {
      state.isFetching = true;
      state.error = null;
    },
    dispatchByIdSuccess: (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.dispatchesDetail = action.payload;
    },
    dispatchByIdFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const {
  dispatchListRequest,
  dispatchListSuccess,
  dispatchListFailure,
  dispatchByIdRequest,
  dispatchByIdSuccess,
  dispatchByIdFailure,
} = dispatch.actions;

export default dispatch.reducer;
