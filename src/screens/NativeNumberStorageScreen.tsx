import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React from 'react';

import NativeLocalStorage from '../../specs/NativeLocalStorage';

const EMPTY = '<empty>';

const NativeNumberStorageScreen = () => {
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
      <Text style={styles.text}>
        Current stored value is: {value ?? 'No Value'}
      </Text>
      <TextInput
        placeholder="Enter the text you want to store"
        style={styles.textInput}
        onChangeText={setEditingValue}
      />
      <View style={styles.button}>
        <Button title="Save" onPress={saveValue} />
      </View>
      <View style={styles.button}>
        <Button title="Delete" onPress={deleteValue} />
      </View>
      <View style={styles.button}>
        <Button title="Clear" onPress={clearAll} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
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
  button: {
    margin: 4,
  },
});

export default NativeNumberStorageScreen;
