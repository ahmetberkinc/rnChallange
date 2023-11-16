import React from 'react';
import ProductDetailView from './ProductDetailView';
import {useNavigation} from '@react-navigation/native';

const ProductDetailContainer = ({route}) => {
  const {product, productList} = route.params;

  const navigation = useNavigation();

  //To prevent edge cases(first and last item) infinite display approach applied
  const findCorrectIndex = selection => {
    if (selection === 'PREVIOUS') {
      return productList.findIndex(item => item.id === product.id) === 0
        ? productList.length - 1
        : productList.findIndex(item => item.id === product.id) - 1;
    } else {
      return productList.findIndex(item => item.id === product.id) ===
        productList.length - 1
        ? 0
        : productList.findIndex(item => item.id === product.id) + 1;
    }
  };

  const navigateNeighborProduct = selection => {
    if (selection === 'PREVIOUS') {
      navigation.navigate('ProductDetail', {
        product: productList[findCorrectIndex(selection)],
        productList: productList,
      });
    } else {
      navigation.navigate('ProductDetail', {
        product: productList[findCorrectIndex(selection)],
        productList: productList,
      });
    }
  };

  return (
    <ProductDetailView
      navigateNeighborProduct={navigateNeighborProduct}
      product={product}
    />
  );
};

export default ProductDetailContainer;
