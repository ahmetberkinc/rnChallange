import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Constants from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Rating from '../productList/components/Rating';
import FavoriteAction from '../productList/components/FavoriteAction';

const ProductDetailView = ({product}) => {
  console.log('producta', product);

  const renderFavoriteAction = () => {
    return <FavoriteAction product={product} />;
  };

  const renderProductImage = () => {
    return (
      <FastImage
        style={styles.containerBigImage}
        source={{
          uri: product?.thumbnail,
          priority: 'high',
        }}
        resizeMode="contain"
      />
    );
  };

  const renderDetails = () => {
    return (
      <View style={styles.containerDetail}>
        <Text>
          <Text style={styles.title}>{product?.title} </Text>
          <Text style={styles.description}>{product?.description}</Text>
        </Text>
      </View>
    );
  };

  const renderPriceAndStock = () => {
    return (
      <View style={styles.containerPriceAndStock}>
        <View style={styles.containerStock}>
          <Ionicons name={'time'} size={20} color={Constants.RED} />
          <Text style={styles.stock}>Last {product?.stock} Product</Text>
        </View>
        <Text
          style={[
            styles.price,
            {
              textDecorationLine:
                product?.discountPercentage > 0 ? 'line-through' : 'none',
            },
          ]}>
          $ {product?.price}{' '}
        </Text>
        {product?.discountPercentage > 0 && (
          <Text style={styles.discountPrice}>
            ${' '}
            {(
              product?.price -
              (product?.price * product?.discountPercentage) / 100
            ).toFixed(2)}
          </Text>
        )}
      </View>
    );
  };

  const renderRating = () => {
    return (
      <View style={styles.containerRating}>
        <Text style={styles.rating}>{(product?.rating).toFixed(1)}</Text>
        <View style={{marginLeft: 6}}>
          <Rating product={product} />
        </View>
      </View>
    );
  };

  return (
    <View>
      {renderProductImage()}
      <View style={{marginHorizontal: 6}}>
        {renderFavoriteAction()}
        {renderDetails()}
        {renderPriceAndStock()}
        {renderRating()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBigImage: {
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_WIDTH,
  },
  containerDetail: {
    flexDirection: 'row',
    marginTop: 8,
  },
  title: {
    color: Constants.BLACK,
    fontWeight: '800',
    fontSize: 16,
  },
  description: {
    color: Constants.GRAY,
    fontSize: 15,
    fontWeight: '600',
  },
  containerPriceAndStock: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 12,
  },
  containerStock: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: Constants.LIGHT_RED,
    borderRadius: 10,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stock: {
    fontSize: 12,
    color: Constants.RED,
    marginLeft: 2,
    fontWeight: '700',
  },
  price: {
    fontSize: 15,
    fontWeight: '800',
    color: Constants.GRAY,
    textAlign: 'center',
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: Constants.RED_ORANGE,
    textAlign: 'center',
  },
  containerRating: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },
  rating: {color: Constants.BLACK, fontWeight: '600'},
});

export default ProductDetailView;
