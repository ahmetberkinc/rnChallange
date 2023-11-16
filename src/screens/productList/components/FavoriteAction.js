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
import {useIsFocused, useRoute} from '@react-navigation/native';
import ColorPicker from './ColorPicker';
import MainContext from '../../../context/MainContext';

const FavoriteAction = ({product}) => {
  //Responsible for instant ui change
  const [isFavorite, setIsFavorite] = useState(false);
  const [colorPickerVisibility, setColorPickerVisibility] = useState(false);

  const {heartColor, updateToggle, setUpdateToggle} = useContext(MainContext);

  const isFocused = useIsFocused();
  const route = useRoute();

  //Used for displaying correct favorite status after navigation,goback()
  useEffect(() => {
    isFocused && checkProductIsFav(product).then(isFav => setIsFavorite(isFav));
  }, [isFocused]);

  //If fav product marked as unfav context state switching and trigger updated favlist
  //Also has tooltip usage
  function onFavoriteIconPress() {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      removeFavProduct(product).then(
        () => route.name === 'FavoriteList' && setUpdateToggle(!updateToggle),
      );
    } else {
      checkFirstTime('HEART_COLOR_KEY', Constants.TOOLTIP_HEART_COLOR),
        addFavProduct(product);
    }
  }

  return (
    <View>
      <TouchableOpacity
        onLongPress={() => setColorPickerVisibility(true)}
        onPress={() => onFavoriteIconPress()}
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
