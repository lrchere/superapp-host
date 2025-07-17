import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  MainNavigatorParamList,
  MainStackNavigationProp,
} from '../navigation/MainNavigator';

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const itemSize = (screenWidth - 4 * (numColumns * 2) - 16) / numColumns;

const CollectionGrid = ({
  features: features,
}: {
  features: Array<{ key: string; label: string; description?: string }>;
}) => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={features}
      keyExtractor={item => item.key}
      scrollEnabled={false}
      numColumns={numColumns}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(item.key as keyof MainNavigatorParamList)
          }
          style={[styles.item, { width: itemSize, height: itemSize / 2 }]}
        >
          <Text style={styles.itemText}>{item.label}</Text>
          <View style={styles.spacer} />
          {item.description && (
            <Text style={styles.itemDescription}>{item.description}</Text>
          )}
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    margin: 4,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  itemText: {
    fontSize: 16,
    textAlign: 'center',
  },
  itemDescription: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
  },
  spacer: {
    height: 4,
  },
});

export default CollectionGrid;
