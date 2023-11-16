import React, {useState, useEffect, useContext} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {
  addFavProduct,
  checkProductIsFav,
  removeFavProduct,
} from '../../../services/productApi';
import {checkFirstTime} from '../../../../tooltip';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Constants from '../../../constants';
import {useIsFocused} from '@react-navigation/native';
import ColorPicker from './ColorPicker';
import ColorContext from '../../../../colorContext';

const FavoriteAction = ({product}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [colorPickerVisibility, setColorPickerVisibility] = useState(false);

  const {heartColor} = useContext(ColorContext);

  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && checkProductIsFav(product).then(isFav => setIsFavorite(isFav));
  }, [isFocused]);

  return (
    <View>
      <TouchableOpacity
        onLongPress={() => setColorPickerVisibility(true)}
        onPress={() => {
          setIsFavorite(!isFavorite),
            isFavorite
              ? removeFavProduct(product)
              : (checkFirstTime(
                  'HEART_COLOR_KEY',
                  Constants.TOOLTIP_HEART_COLOR,
                ),
                addFavProduct(product));
        }}
        style={styles.favoriteContainer}>
        <AntDesign
          color={isFavorite ? heartColor : Constants.BLACK}
          name={isFavorite ? 'heart' : 'hearto'}
          size={20}
        />
      </TouchableOpacity>
      {colorPickerVisibility && (
        <ColorPicker setColorPickerVisibility={setColorPickerVisibility} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  favoriteContainer: {
    alignSelf: 'flex-end',
    marginRight: 12,
    marginTop: 12,
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    backgroundColor: Constants.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 10,
  },
});

export default FavoriteAction;
