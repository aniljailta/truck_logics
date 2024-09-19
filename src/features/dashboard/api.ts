import RequestService from '@/services/RequestService';
import handleApiError from '@/helpers/errorHandling';
import {getStoreData} from '@/services/StorageHelper';

async function dispatchStatsApi() {
  var acess_token = getStoreData('access_token');
  console.log(acess_token);

  try {
    const response = await RequestService.get(
      `dispatches/stats?api_token=ad94bad599e43634ab035bfd5b7e1a8353fddd8d9abf00d50888c46b9d0957c1`,
    );
    if (response && response.status === 200) {
      return response.data;
    }
  } catch (e: unknown) {
    return handleApiError(e);
  }
}

export {dispatchStatsApi};
