import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListContainer from './src/screens/productList/ProductListContainer';
import FavoriteListContainer from './src/screens/favoriteList/FavoriteListContainer';
import Toast from 'react-native-toast-message';
import Constants, {toastConfig} from './src/constants';
import ProductDetailContainer from './src/screens/productDetail/ProductDetailContainer';
import {MainContextProvider} from './src/context/MainContext';
import HeaderLeftAction from './navigation/components/HeaderLeftAction';
import BootSplash from 'react-native-bootsplash';
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [isConnected, setIsConnected] = useState(true);

  async function checkInternetConnection() {
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          resolve();
        } else {
          reject();
        }
      });
    });
  }

  useEffect(() => {
    const init = async () => {
      checkInternetConnection()
        .then(() => setIsConnected(true))
        .catch(() => setIsConnected(false));
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);

  return (
    <SafeAreaProvider>
      <MainContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={isConnected ? 'ProductList' : 'FavoriteList'}
            screenOptions={{
              contentStyle: {
                backgroundColor: Constants.DIRTY_WHITE,
              },
            }}>
            <Stack.Screen
              options={{headerShown: false}}
              name="ProductList"
              component={ProductListContainer}
            />
            <Stack.Screen
              name="FavoriteList"
              options={{
                headerLeft: () => isConnected && <HeaderLeftAction />,
              }}
              component={FavoriteListContainer}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetailContainer}
              options={({route}) => ({
                title: route.params.product.title,
                headerTitleStyle: {fontSize: 18, fontWeight: '600'},
                headerLeft: () => <HeaderLeftAction />,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MainContextProvider>
      <Toast config={toastConfig} />
    </SafeAreaProvider>
  );
};

export default App;
