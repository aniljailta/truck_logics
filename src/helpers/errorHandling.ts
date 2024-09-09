import axios from 'axios';
import Toast from 'react-native-toast-message';

function handleApiError(error: unknown) {
  if (axios.isAxiosError(error) && error.response) {
    const {status} = error.response;
    const errorMessage = error.response.data.message;
    switch (status) {
      case 400:
        Toast.show({
          type: 'error',
          text1: 'Bad Request !',
          text2: errorMessage || 'An error occurred. Please try again.',
        });
        break;
      case 401:
        Toast.show({
          type: 'error',
          text1: 'Unauthorized !',
          text2:
            errorMessage || 'You are not authorized to perform this action.',
        });
        break;
      case 404:
        Toast.show({
          type: 'error',
          text1: 'Not Found !',
          text2: errorMessage || 'The requested resource was not found.',
        });
        break;
      case 500:
        Toast.show({
          type: 'error',
          text1: 'Internal Server Error !',
          text2: error.message || 'An unexpected error occurred on the server.',
        });
        break;
      default:
        Toast.show({
          type: 'error',
          text1: 'Something went wrong !',
          text2: 'An error occurred. Please try again later.',
        });
        break;
    }
    throw errorMessage;
  }
}

export default handleApiError;
