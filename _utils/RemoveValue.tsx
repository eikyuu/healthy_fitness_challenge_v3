import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('challenge');
    } catch (e) {
      // remove error
    }
  };