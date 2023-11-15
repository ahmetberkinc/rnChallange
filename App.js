/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListContainer from './src/screens/productList/ProductListContainer';
import FavoriteListContainer from './src/screens/favoriteList/FavoriteListContainer';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/constants';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="ProductList" component={ProductListContainer} />
          <Stack.Screen name="FavoriteList" component={FavoriteListContainer} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </SafeAreaProvider>
  );
};

export default App;
