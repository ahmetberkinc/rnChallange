import React, {useContext, useState} from 'react';
import {Modal, Text, TouchableOpacity, StyleSheet} from 'react-native';
import WheelPicker from 'react-native-wheel-color-picker';
import Constants from '../../../constants';
import ColorContext from '../../../../colorContext';

const ColorPicker = ({setColorPickerVisibility}) => {
  const [selectedColor, setSelectedColor] = useState(heartColor);

  const {heartColor, setHeartColor} = useContext(ColorContext);

  return (
    <Modal>
      <WheelPicker
        color={selectedColor}
        onColorChange={color => setSelectedColor(color)}
        thumbSize={30}
        sliderSize={25}
      />
      <TouchableOpacity
        onPress={() => {
          setHeartColor(selectedColor), setColorPickerVisibility(false);
        }}
        style={styles.containerColorSelect}>
        <Text style={styles.colorSelectText}>Select Color</Text>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerColorSelect: {
    height: 40,
    marginVertical: 50,
    borderRadius: 20,
    backgroundColor: Constants.ORANGE,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  colorSelectText: {
    color: Constants.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ColorPicker;
