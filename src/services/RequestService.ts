import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import Config from 'react-native-config';
import {getStoreData} from './StorageHelper';
import store from '@/app/store';
import {logoutRequest} from '@/features/auth/slice';
import Toast from 'react-native-toast-message';

interface ConfigType extends AxiosRequestConfig {}

axios.defaults.baseURL = Config.API_URL;

axios.interceptors.request.use(
  async function (config: InternalAxiosRequestConfig) {
    const accessToken = await getStoreData('access_token');

    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
    return Promise.resolve(config);
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response): AxiosResponse => response,
  async (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logoutRequest());
      Toast.show({
        type: 'error',
        text1: 'Unauthorized',
        text2: 'Please login to continue',
      });
    }
    return Promise.reject(error);
  },
);

const get = (url: string, config: ConfigType = {}): Promise<AxiosResponse> =>
  axios.get(url, config);

const post = (
  url: string,
  data: unknown,
  config: ConfigType = {},
): Promise<AxiosResponse> => axios.post(url, data, config);

const put = (
  url: string,
  data: unknown,
  config: ConfigType = {},
): Promise<AxiosResponse> => axios.put(url, data, config);

const patch = (
  url: string,
  data: unknown,
  config: ConfigType = {},
): Promise<AxiosResponse> => axios.patch(url, data, config);

const remove = (
  url: string,
  data: unknown,
  config: ConfigType = {},
): Promise<AxiosResponse> => axios.delete(url, config);

export default {get, post, put, patch, remove};
