import RequestService from '@/services/RequestService';
import Toast from 'react-native-toast-message';
import handleApiError from '@/helpers/errorHandling';
import {getStoreData} from '@/services/StorageHelper';

async function dispatchStatsApi() {
  var acess_token = getStoreData('access_token');
  try {
    const response = await RequestService.get(
      `dispatches/stats?api_token=${acess_token}`,
    );
    if (response && response.status === 200) {
      return response.data;
    }
  } catch (e: unknown) {
    return handleApiError(e);
  }
}

export {dispatchStatsApi};
