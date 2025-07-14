import { View, StyleSheet } from 'react-native';
import React from 'react';
import CollectionGrid from '../components/CollectionGrid';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CollectionGrid
        miniApps={[
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
});

export default HomeScreen;
