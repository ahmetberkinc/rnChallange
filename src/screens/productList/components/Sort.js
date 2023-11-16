import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, Modal, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Constants from '../../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Sort = ({onSortSelection}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedSortOption, setSelectedSortOption] = useState({
    name: 'Suggested',
    type: 'default',
    order: '',
  });

  const sortOptions = [
    {name: 'Suggested', type: 'default', order: ''},
    {
      name: 'Ascending Price',
      type: 'price',
      order: 'Ascending',
    },
    {
      name: 'Descending Price',
      type: 'price',
      order: 'Descending',
    },
    {
      name: 'Ascending Rating',
      type: 'rating',
      order: 'Ascending',
    },
    {
      name: 'Descending Rating',
      type: 'rating',
      order: 'Descending',
    },
  ];

  const renderSortOptions = sortOptions.map((sortOption, index) => {
    return (
      <View key={index} style={styles.optionContainer}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false),
              setSelectedSortOption(sortOption),
              onSortSelection(sortOption.type, sortOption.order);
          }}
          style={styles.optionItem}>
          <Text
            style={[
              styles.optionText,
              {
                color:
                  selectedSortOption.name === sortOption.name
                    ? Constants.RED
                    : Constants.BLACK,
              },
            ]}>
            {sortOption.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={styles.sortContainer}>
      <FontAwesome name={'sort'} size={15} color={Constants.ORANGE} />
      <Text style={styles.sortText}>Sort</Text>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            setModalVisible(false);
          }}>
          <TouchableOpacity activeOpacity={1} style={styles.modalView}>
            <View style={styles.titleContainer}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false),
                    setSelectedSortOption('Suggested'),
                    onSortSelection('default');
                }}
                style={styles.clearTextContainer}>
                <Text style={styles.clearText}>Clear</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Sort By</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}>
                <AntDesign name={'close'} size={30} />
              </TouchableOpacity>
            </View>
            <View style={styles.optionContainer}>{renderSortOptions}</View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sortContainer: {
    flexDirection: 'row',
    backgroundColor: Constants.WHITE,
    borderRadius: 10,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    marginVertical: 6,
    marginLeft: 6,
  },
  sortText: {fontSize: 13, color: Constants.BLACK, marginLeft: 5},
  modalView: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    width: Constants.SCREEN_WIDTH,
  },
  closeButton: {position: 'absolute', right: 10},
  titleContainer: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: Constants.LIGHT_GRAY,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Constants.BLACK,
    textAlign: 'center',
  },
  optionContainer: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  optionItem: {
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 15,
  },
  clearTextContainer: {
    position: 'absolute',
    left: 10,
  },
  clearText: {
    fontSize: 18,
    color: Constants.ORANGE,
    fontWeight: '600',
  },
});

export default Sort;
