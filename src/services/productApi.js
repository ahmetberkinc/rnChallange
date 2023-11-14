import axios from 'axios';

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
