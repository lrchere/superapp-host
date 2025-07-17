import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MiniAppCreditCardScreen from '../screens/MiniAppCreditCardScreen';
import MiniAppCreditScreen from '../screens/MiniAppCreditScreen';
import NativeNumberStorageScreen from '../screens/NativeNumberStorageScreen';

export type MainNavigatorParamList = {
  Home: undefined;
  MiniAppCreditCard: undefined;
  MiniAppCredit: undefined;
  NativeNumberStorage: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainNavigatorParamList>;

const Stack = createNativeStackNavigator<MainNavigatorParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        options={{ headerShown: true }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="MiniAppCreditCard"
        component={MiniAppCreditCardScreen}
      />
      <Stack.Screen name="MiniAppCredit" component={MiniAppCreditScreen} />
      <Stack.Screen
        options={{ headerShown: true }}
        name="NativeNumberStorage"
        component={NativeNumberStorageScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
