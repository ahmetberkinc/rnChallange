import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Constants from '../../../constants';

const Filter = ({products, onFilterSelection}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [brandList, setBrandList] = useState([]);

  function getBrandList() {
    setBrandList([...new Set(products.map(product => product.brand))]);
  }

  function renderBrandList() {
    return brandList.map((brand, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setModalVisible(false), onFilterSelection(brand);
          }}
          style={styles.brandItemContainer}>
          <Text style={styles.brandItemText}>{brand}</Text>
        </TouchableOpacity>
      );
    });
  }

  return (
    <TouchableOpacity
      onPress={() => {
        getBrandList(), setModalVisible(true);
      }}
      style={styles.filterContainer}>
      <AntDesign name={'filter'} size={15} color={Constants.ORANGE} />
      <Text style={styles.filterText}>Filter</Text>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            setModalVisible(false);
          }}>
          <TouchableOpacity activeOpacity={1} style={styles.modalView}>
            <View style={styles.titleContainer}>
              <Text style={styles.modalTitle}>Filter By</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false), onFilterSelection('ALL');
                }}
                style={styles.clearTextContainer}>
                <Text style={styles.clearText}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}>
                <AntDesign name={'close'} size={30} />
              </TouchableOpacity>
            </View>
            <ScrollView style={{height: 250}}>{renderBrandList()}</ScrollView>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
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
  filterText: {fontSize: 13, color: Constants.BLACK, marginLeft: 5},
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
  brandItemContainer: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandItemText: {
    fontSize: 16,
    fontWeight: '600',
    color: Constants.BLACK,
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

export default Filter;
