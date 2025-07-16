import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import React from 'react';
import CollectionGrid from '../components/CollectionGrid';

import NativeLocalStorage from '../../specs/NativeLocalStorage';

const EMPTY = '<empty>';

const HomeScreen = () => {
  const [value, setValue] = React.useState<string | null>(null);

  const [editingValue, setEditingValue] = React.useState<string | null>(null);

  React.useEffect(() => {
    const storedValue = NativeLocalStorage?.getItem('myKey');
    setValue(storedValue ?? '');
  }, []);

  function saveValue() {
    NativeLocalStorage?.setItem(editingValue ?? EMPTY, 'myKey');
    setValue(editingValue);
  }

  function clearAll() {
    NativeLocalStorage?.clear();
    setValue('');
  }

  function deleteValue() {
    NativeLocalStorage?.removeItem('myKey');
    setValue('');
  }

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
      <Text style={styles.text}>
        Current stored value is: {value ?? 'No Value'}
      </Text>
      <TextInput
        placeholder="Enter the text you want to store"
        style={styles.textInput}
        onChangeText={setEditingValue}
      />
      <Button title="Save" onPress={saveValue} />
      <Button title="Delete" onPress={deleteValue} />
      <Button title="Clear" onPress={clearAll} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  text: {
    fontSize: 16,
    margin: 8,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 8,
    paddingHorizontal: 8,
  },
});

export default HomeScreen;
