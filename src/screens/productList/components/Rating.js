import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Constants from '../../../constants';

const Rating = ({product}) => {
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
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
      <Text style={styles.rating}>{(product?.rating).toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {color: Constants.BLACK, fontWeight: '500', marginLeft: 6},
});

export default Rating;
