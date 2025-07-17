import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import CollectionGrid from '../components/CollectionGrid';
import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationProp } from '../navigation/MainNavigator';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View>
      <Text style={styles.sectionTitle}>Mini Apps</Text>

      <CollectionGrid
        features={[
          {
            key: 'MiniAppCreditCard',
            label: 'Credit Card Mini App',
            description: 'Manage your credit cards',
          },
          {
            key: 'MiniAppCredit',
            label: 'Credit Mini App',
            description: 'Manage your credit',
          },
        ]}
      />

      <Text style={styles.sectionTitle}>Native Features</Text>
      <CollectionGrid
        features={[
          {
            key: 'NativeNumberStorage',
            label: 'Native Number Storage',
            description: 'Store and retrieve numbers using native storage',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    margin: 16,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    margin: 8,
  },
});

export default HomeScreen;
