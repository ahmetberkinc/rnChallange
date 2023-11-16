import {Dimensions} from 'react-native';
import {BaseToast} from 'react-native-toast-message';

class Constants {
  static SCREEN_WIDTH = Dimensions.get('window').width;
  static SCREEN_HEIGHT = Dimensions.get('window').height;

  static SILVER = '#D3D3D3';
  static WHITE = '#FFFFFF';
  static DIRTY_WHITE = '#EDE9E8';
  static ORANGE = '#FFA500';
  static LIGHT_ORANGE = '#FFAC1C';
  static BLACK = '#000000';
  static LIGHT_GRAY = '#D3D3D3';
  static GRAY = '#808080';
  static RED_ORANGE = '#FF0000';
  static LIGHT_RED = '#FFB3B2';
  static RED = '#FF0000';

  //BETTER WAY USE LOCALIZATION
  static TOOLTIP_HEART_COLOR =
    'You can choose the color you want by long pressing the heart icon.';
  static EMPTY_FAV_LIST_INFO =
    'There is no product in your favorite list. You can add products to the favorite list by pressing the heart icon on the products.';
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
