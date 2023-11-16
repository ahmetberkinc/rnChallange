import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Constants from '../../../constants';

const ImageCarousel = ({data}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.containerImage}>
        <FastImage
          style={{
            width: Constants.SCREEN_WIDTH / 2.5,
            height: 100,
          }}
          source={{uri: item}}
          resizeMode="center"
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerImage: {marginVertical: 8, marginRight: 8},
});

export default ImageCarousel;
