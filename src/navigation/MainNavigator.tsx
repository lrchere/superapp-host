import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import MiniAppGreenScreen from '../screens/MiniAppGreenScreen';
import HomeScreen from '../screens/HomeScreen';

export type MainNavigatorParamList = {
  Home: undefined;
  MiniAppGreen: undefined;
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
      <Stack.Screen name="MiniAppGreen" component={MiniAppGreenScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
