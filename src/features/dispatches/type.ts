export type Dispatch = {
  id: number;
  driver_id: number;
  shipment_id: number;
  ftl_dispatches_payment_id: null;
  type: null;
  leg: 1;
  truck_number: null;
  trailer_number: null;
  pickup_address_id: number;
  drop_address_id: number;
  notify_phone: string;
  notify_email: string;
  start_date: string;
  paid_at: null;
  created_at: null;
  updated_at: null;
  deleted_at: null;
  status: string;
  driver: Driver;
  pickup_address: Address;
  drop_address: Address;
  ftl_statuses: FtlStatus[];
  assets: Assets[];
  notes: Notes[];
};
interface Driver {
  id: number;
  type: string;
  name: string;
  billing_contact_id: null | number;
  scac: null | string;
  p44_capacity_code: null | string;
  p44_account_code: null | string;
  stripe_test_publishable: null | string;
  stripe_test_private: null | string;
  stripe_live_publishable: null | string;
  stripe_live_private: null | string;
  stripe_id: null | string;
  card_brand: null | string;
  card_last_four: null | string;
  trial_ends_at: null | string;
  billing_terms: number;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  billing_address_id: null | number;
  sales_rep_id: null | number;
  is_local: boolean;
  is_line_haul: boolean;
  is_basic_routing: boolean;
  is_forwarder: boolean;
  billing_email: null | string;
  is_door_to_door: null | boolean;
  integration_type: null | string;
  account_number: string;
  allows_dock_dropoff: boolean;
  notify_support: null | boolean;
  notify_sales: null | boolean;
  auto_invoice: null | boolean;
  is_spa_covers: null | boolean;
  is_hidden: boolean;
  insurance_disabled: boolean;
  default_insurance_type: null | string;
  default_insurance_coverage_cents: null | number;
  max_insurance_coverage_cents: null | number;
  min_insurance_coverage_cents: null | number;
  free_insurance_coverage_cents: null | number;
  can_ship: null | boolean;
  send_shipment_data: null | boolean;
  is_ftl: null | boolean;
  validate_addresses: null | boolean;
  services_all_zips: null | boolean;
  master_rate_sheet_id: null | number;
  sales_rep_commission_rate: null | number;
  mc_number: null | string;
  commission_type: number;
  public_link_token: null | string;
  bill_to_name: null | string;
  manual_routing: boolean;
  is_ltl: boolean;
  user_type: string;
}
export type Address = {
  id: number;
  postal_code: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  country: string;
  zip_id: number;
  address_verification_id: 1;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  disable_resi: null;
  type: null;
  address_line: ['7277 William Avenue', 'Suite 350'];
  terminal_name: null;
};
export type FtlStatus = {
  id: number;
  ftl_dispatch_id: number;
  status: string;
  desc: string;
  date_and_time: string;
  created_by: number;
  created_at: null;
  updated_at: null;
  deleted_at: null;
};
export type Assets = {
  id: number;
  ftl_dispatch_id: number;
  file_type: string;
  name: string;
  storage_token: string;
  desc: string;
  uploaded_by: number;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  download_url: string;
  stream_url: string;
};
export type Notes = {
  id: number;
  created_by: string;
  assigned_to: number;
  completed_at: null;
  completed_by: null;
  noteable_id: number;
  noteable_type: string;
  type: string;
  body: string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  follow_up_at: string;
  follow_up_task_id: string;
  follow_up_email_id: string;
  creator: Creator;
  assignee: Creator;
  completor: Creator;

};

type Creator = {
  id: number
  name: string
  email: string
  api_token: string
  created_at: string
  updated_at: string
  stripe_id: any
  card_brand: any
  card_last_four: any
  trial_ends_at: any
  org_id: number
  default_timezone: string
  roles: any
  is_sales_rep: boolean
  deleted_at: any
  phone_no: any
  account_no: any
}



