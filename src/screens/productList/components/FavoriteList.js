import React, {useContext} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Constants from '../../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import ColorContext from '../../../../colorContext';

const FavoriteList = () => {
  const navigation = useNavigation();

  const {heartColor} = useContext(ColorContext);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FavoriteList')}
      style={styles.favoriteContainer}>
      <AntDesign name={'heart'} size={15} color={heartColor} />
      <Text style={styles.favoriteText}>Favorite List</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favoriteContainer: {
    flexDirection: 'row',
    backgroundColor: Constants.WHITE,
    borderRadius: 10,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    marginVertical: 6,
    position: 'absolute',
    right: 6,
  },

  favoriteText: {fontSize: 13, color: Constants.BLACK, marginLeft: 5},
});

export default FavoriteList;
