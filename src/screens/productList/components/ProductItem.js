import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Constants from '../../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  addFavProduct,
  checkProductIsFav,
  removeFavProduct,
} from '../../../services/productApi';
import {useIsFocused} from '@react-navigation/native';
import {checkFirstTime} from '../../../../tootlip';

const ProductItem = ({product, setColorPickerVisibility}) => {
  const [favoriteProduct, setFavoriteProduct] = useState(false);

  // This hook returns `true` if the screen is focused, `false` otherwise
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused &&
      checkProductIsFav(product).then(isFav => setFavoriteProduct(isFav));
  }, [isFocused]);

  const renderFavorite = () => {
    return (
      <TouchableOpacity
        onLongPress={() => setColorPickerVisibility(true)}
        onPress={() => {
          setFavoriteProduct(!favoriteProduct),
            favoriteProduct
              ? removeFavProduct(product)
              : (checkFirstTime(
                  'HEART_COLOR_KEY',
                  Constants.TOOLTIP_HEART_COLOR,
                ),
                addFavProduct(product));
        }}
        style={styles.favoriteContainer}>
        <AntDesign
          color={
            favoriteProduct ? Constants.DYNAMIC_HEART_COLOR : Constants.BLACK
          }
          name={favoriteProduct ? 'heart' : 'hearto'}
          size={20}
        />
      </TouchableOpacity>
    );
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
        {renderRatings()}
        <Text style={styles.price}>{product?.price} $</Text>
      </View>
    );
  };

  const renderRatings = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <FontAwesome
          color={Constants.LIGHT_ORANGE}
          name={findCorrectStarName(1)}
          size={18}
        />
        <FontAwesome
          color={Constants.LIGHT_ORANGE}
          name={findCorrectStarName(2)}
          size={18}
        />
        <FontAwesome
          color={Constants.LIGHT_ORANGE}
          name={findCorrectStarName(3)}
          size={18}
        />
        <FontAwesome
          color={Constants.LIGHT_ORANGE}
          name={findCorrectStarName(4)}
          size={18}
        />
        <FontAwesome
          color={Constants.LIGHT_ORANGE}
          name={findCorrectStarName(5)}
          size={18}
        />
      </View>
    );
  };

  function findCorrectStarName(starPosition) {
    if (product?.rating > starPosition) {
      return 'star';
    } else if (starPosition - product?.rating < 0.5) {
      return 'star-half-empty';
    } else {
      return 'star-o';
    }
  }

  return (
    <TouchableOpacity
      style={[styles.productContainer, {marginRight: product.le}]}>
      {renderFavorite()}
      {renderImage()}
      {renderDetails()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favoriteContainer: {alignSelf: 'flex-end', marginRight: 12, marginTop: 12},
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
