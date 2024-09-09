export interface User {
  id: number;
  name: string;
  email: string;
  api_token: string;
  created_at: string;
  updated_at: string;
  stripe_id: any;
  card_brand: any;
  card_last_four: any;
  trial_ends_at: any;
  org_id: number;
  default_timezone: string;
  roles: any;
  is_sales_rep: boolean;
  deleted_at: any;
  phone_no: any;
  account_no: any;
}

export type LoginFormData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  statue: number;
  success: boolean;
  message: string;
  api_token: string;
  user: User;
};

export type OtpRequestPayload = {
  email: string;
  onSuccess: () => void;
};

export type ResetPasswordRequestPayload = {
  email: string;
  otp: string;
  password: string;
  password_confirmation: string;
  onSuccess: () => void;
};
