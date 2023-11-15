import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Constants from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import Rating from './Rating';
import FavoriteAction from './FavoriteAction';

const ProductItem = ({product}) => {
  // This hook returns `true` if the screen is focused, `false` otherwise
  const navigation = useNavigation();

  const renderFavorite = () => {
    return <FavoriteAction product={product} />;
  };

  const renderImage = () => {
    return (
      <View style={styles.imageContainer}>
        <FastImage
          style={{
            width: Constants.SCREEN_WIDTH / 2.5,
            height: Constants.SCREEN_WIDTH / 2.5,
          }}
          source={{uri: product?.thumbnail}}
          resizeMode="center"
        />
      </View>
    );
  };

  const renderDetails = () => {
    return (
      <View style={styles.detailContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {product?.title}
        </Text>
        <Text numberOfLines={2}>{product?.description}</Text>
        <Rating product={product} />
        <Text style={styles.price}>$ {product?.price} </Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail', {
          product: product,
        })
      }
      style={styles.productContainer}>
      {renderFavorite()}
      {renderImage()}
      {renderDetails()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {justifyContent: 'center', alignItems: 'center'},
  detailContainer: {
    marginLeft: 5,
  },
  productContainer: {
    height: Constants.SCREEN_HEIGHT / 2.5,
    borderRadius: 10,
    backgroundColor: Constants.WHITE,
    flex: 0.48,
    marginVertical: 4,
  },
  title: {fontWeight: '600', fontSize: 16, color: Constants.BLACK},
  price: {
    fontSize: 14,
    fontWeight: '800',
    color: Constants.ORANGE,
  },

  container: {
    flex: 1,
    marginVertical: 20,
  },
});

export default ProductItem;
