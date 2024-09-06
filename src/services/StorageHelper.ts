import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStoreData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data stored successfully');
  } catch (error) {
    console.error('Error storing data: ', error);
  }
};

export const getStoreData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      console.log('No data found for key: ', key);
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data: ', error);
  }
};
export const removeStoredData = async (name: string) => {
  try {
    await AsyncStorage.removeItem(name);
  } catch (error: any) {
    console.log('AsyncStorage remove error: ' + error.message);
  }
};
