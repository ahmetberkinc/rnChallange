import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Constants from '../../../constants';

const EmptyFavList = () => {
  return (
    <View style={styles.infoContainer}>
      <AntDesign name={'hearto'} size={80} />
      <Text style={styles.info}>{Constants.EMPTY_FAV_LIST_INFO}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: 150,
  },
  info: {
    textAlign: 'center',
    color: Constants.BLACK,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 16,
  },
});

export default EmptyFavList;
