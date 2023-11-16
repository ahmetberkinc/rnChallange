import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Constants from '../../src/constants';

const HeaderLeftAction = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={{padding: 8}} onPress={() => navigation.goBack()}>
      <AntDesign name={'arrowleft'} size={20} color={Constants.BLACK} />
    </TouchableOpacity>
  );
};

export default HeaderLeftAction;
