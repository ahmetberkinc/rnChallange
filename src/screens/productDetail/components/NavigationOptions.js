import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Constants from '../../../constants';

const NavigationOptions = ({navigateNeighborProduct}) => {
  const renderPreviousOption = () => {
    return (
      <TouchableOpacity
        onPress={() => navigateNeighborProduct('PREVIOUS')}
        style={styles.containerOption}>
        <AntDesign name={'arrowleft'} size={20} color={Constants.BLACK} />
        <Text style={styles.option}>Previous Product</Text>
      </TouchableOpacity>
    );
  };

  const renderNextOption = () => {
    return (
      <TouchableOpacity
        onPress={() => navigateNeighborProduct('NEXT')}
        style={styles.containerOption}>
        <Text style={styles.option}>Next Product</Text>
        <AntDesign name={'arrowright'} size={20} color={Constants.BLACK} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containerNavigation}>
      {renderPreviousOption()}
      {renderNextOption()}
    </View>
  );
};

const styles = StyleSheet.create({
  containerNavigation: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    fontSize: 16,
    color: Constants.BLACK,
  },
});

export default NavigationOptions;
