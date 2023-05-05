import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('challenge');
    } catch (e) {
      // remove error
    }
};

export const storeData = async (value: any, name: string) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(name, jsonValue)
  } catch (e) {
    // saving error
    console.log(e);
  }
}