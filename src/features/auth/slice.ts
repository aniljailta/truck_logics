import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  LoginFormData,
  OtpRequestPayload,
  ResetPasswordRequestPayload,
  User,
} from './type';
interface initialStateProps {
  user: User | null;
  isLoading: boolean;
  isFetching: boolean;
  error: null;
  token: null;
  otp: string;
  userEmail: string;
}
const initialState: initialStateProps = {
  user: null,
  isLoading: true,
  isFetching: false,
  error: null,
  token: null,
  otp: '',
  userEmail: '',
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginFormData>) => {
      state.isFetching = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload.user;
      state.token = action.payload.api_token;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    sendOtpRequest: (state, action: PayloadAction<OtpRequestPayload>) => {
      state.isFetching = true;
      state.userEmail = action.payload.email;
    },
    sendOtpSuccess: state => {
      state.isFetching = false;
      state.error = null;
    },
    sendOtpFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    resetPasswordRequest: (
      state,
      action: PayloadAction<ResetPasswordRequestPayload>,
    ) => {
      state.isFetching = true;
    },
    resetPasswordSuccess: state => {
      state.isFetching = false;
      state.error = null;
    },
    resetPasswordFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    logoutRequest: state => {
      state.isFetching = false;
      state.isLoading = false;
    },
    logoutSuccess: state => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
    logoutFailure: (state, action) => {
      state.isFetching = false;
      state.isLoading = false;
      state.error = action.payload;
    },
    refreshTokenSuccess: (state, action) => {
      state.isFetching = false;
      state.isLoading = false;
      state.token = action.payload.token;
    },
    hideSplash: state => {
      state.isLoading = false;
      state.isFetching = false;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  sendOtpRequest,
  sendOtpSuccess,
  sendOtpFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  hideSplash,
  refreshTokenSuccess,
} = authSlice.actions;

export default authSlice.reducer;
