import {Dimensions} from 'react-native';
import {BaseToast} from 'react-native-toast-message';

class Constants {
  static SCREEN_WIDTH = Dimensions.get('window').width;
  static SCREEN_HEIGHT = Dimensions.get('window').height;

  static SILVER = '#D3D3D3';
  static WHITE = '#FFFFFF';
  static ORANGE = '#FFA500';
  static LIGHT_ORANGE = '#FFAC1C';
  static BLACK = '#000000';
  static LIGHT_GRAY = '#D3D3D3';
  //TODO: Store thic color with asyncstorage
  static DYNAMIC_HEART_COLOR = '#FF0000';

  static TOOLTIP_HEART_COLOR =
    'You can choose the color you want by long pressing the heart icon.';
}

export const toastConfig = {
  /*
    Overwrite 'info' type,
    by modifying the existing `BaseToast` component
  */
  info: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: Constants.ORANGE}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
      }}
      text1NumberOfLines={2}
    />
  ),
};

export default Constants;