import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, Modal, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Constants from '../../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Sort = ({onSortSelection}) => {
  const [modalVisible, setModalVisible] = useState(false);

  //TODO SHOW USER SELECTED SORT OPTION ADD NEW STATE

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
              <Text style={styles.modalTitle}>Sort By</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}>
                <AntDesign name={'close'} size={30} />
              </TouchableOpacity>
            </View>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false), onSortSelection('price');
                }}
                style={styles.optionItem}>
                <Text style={styles.optionText}>Price</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false), onSortSelection('rating');
                }}
                style={styles.optionItem}>
                <Text style={styles.optionText}>Rating</Text>
              </TouchableOpacity>
            </View>
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
    marginLeft: 4,
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
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionItem: {
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: Constants.BLACK,
    marginVertical: 15,
  },
});

export default Sort;
