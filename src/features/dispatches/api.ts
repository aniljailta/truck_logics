import RequestService from '@/services/RequestService';
import handleApiError from '@/helpers/errorHandling';

async function dispatchesListApi() {
  try {
    const response = await RequestService.get(
      `ftl/dispatch?api_token=ad94bad599e43634ab035bfd5b7e1a8353fddd8d9abf00d50888c46b9d0957c1`,
    );
    if (response && response.status === 200) {
      return response.data;
    }
  } catch (e: unknown) {
    return handleApiError(e);
  }
}
async function dispatchesByIdApi(id: number) {
  try {
    const response = await RequestService.get(
      `ftl/dispatch/${id}?api_token=ad94bad599e43634ab035bfd5b7e1a8353fddd8d9abf00d50888c46b9d0957c1`,
    );
    if (response && response.status === 200) {
      return response.data;
    }
  } catch (e: unknown) {
    return handleApiError(e);
  }
}

async function uploadDocumentsApi(formData: any) {
  try {
    const response = await RequestService.post(
      `ftl/dispatch/uploadAsset?api_token=ad94bad599e43634ab035bfd5b7e1a8353fddd8d9abf00d50888c46b9d0957c1`,formData, {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      });
    if (response && response.status === 200) {
      return response.data;
    }
  } catch (e: unknown) {
    return handleApiError(e);
  }
}
export {dispatchesListApi, dispatchesByIdApi, uploadDocumentsApi};
