import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListContainer from './src/screens/productList/ProductListContainer';
import FavoriteListContainer from './src/screens/favoriteList/FavoriteListContainer';
import Toast from 'react-native-toast-message';
import Constants, {toastConfig} from './src/constants';
import ProductDetailContainer from './src/screens/productDetail/ProductDetailContainer';
import {ColorContextProvider} from './colorContext';
import HeaderLeftAction from './navigation/components/HeaderLeftAction';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <ColorContextProvider>
        <NavigationContainer>
          <Stack.Navigator
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
              options={({route}) => ({
                headerLeft: () => <HeaderLeftAction />,
              })}
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
      </ColorContextProvider>
      <Toast config={toastConfig} />
    </SafeAreaProvider>
  );
};

export default App;
