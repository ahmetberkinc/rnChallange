import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getProductList = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export async function addFavProduct(product) {
  try {
    const jsonValue = await AsyncStorage.getItem('favProducts');
    //Already exist fav products
    if (jsonValue !== null) {
      await AsyncStorage.setItem(
        'favProducts',
        JSON.stringify(JSON.parse(jsonValue).concat(product)),
      );
      //First time add favorite
    } else {
      await AsyncStorage.setItem('favProducts', JSON.stringify([product]));
    }
  } catch (e) {
    // saving error
  }
}

export async function removeFavProduct(product) {
  let favProducts = [];
  let updatedFavProducts = [];
  try {
    const jsonValue = await AsyncStorage.getItem('favProducts');
    favProducts = JSON.parse(jsonValue);

    updatedFavProducts = favProducts.filter(
      favProduct => favProduct.id !== product.id,
    );

    await AsyncStorage.setItem(
      'favProducts',
      JSON.stringify(updatedFavProducts),
    );
  } catch (e) {
    // error reading value
  }
}

export async function getFavProducts() {
  try {
    const jsonValue = await AsyncStorage.getItem('favProducts');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
}

export async function checkProductIsFav(product) {
  try {
    const jsonValue = await AsyncStorage.getItem('favProducts');
    if (jsonValue !== null) {
      // value previously stored
      return JSON.parse(jsonValue).some(
        favProduct => favProduct.id === product.id,
      );
    }
    return false;
  } catch (e) {
    // error reading value
    console.log('e', e);
  }
}
