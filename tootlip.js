import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

//Responsible with displaying tooltip messages to user before or after using it
export async function checkFirstTime(key, toastMessage) {
  const isFirstTime = await AsyncStorage.getItem(key);

  console.log('isFirstTime', isFirstTime);

  //This means that no key found which indicates the feature is used for the first time
  if (isFirstTime === null) {
    AsyncStorage.setItem(key, 'Done');
    Toast.show({
      type: 'info',
      text1: toastMessage,
      visibilityTime: 5000,
      position: 'bottom',
    });
  }
}
