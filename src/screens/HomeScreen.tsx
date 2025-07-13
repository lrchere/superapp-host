import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { MainStackNavigationProp } from '../navigation/MainNavigator';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button onPress={() => navigation.navigate('MiniAppGreen')}>
        Go to Mini App
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
