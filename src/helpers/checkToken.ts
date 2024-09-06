import {getStoreData} from '@/services/StorageHelper';

export function checkToken() {
  return new Promise((resolve, reject) => {
    getStoreData('access_token')
      .then(token => {
        setTimeout(() => {
          if (token) resolve(token);
          resolve('');
        }, 3000);
      })
      .catch(e => console.error(e));
  });
}
