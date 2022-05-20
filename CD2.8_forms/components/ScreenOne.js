import React, { useState } from 'react';``
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function ScreenOne({ navigation }) {
  const [val, setVal] = useState()
  return (
    <View style={styles.screenOne}>
      <Text style={styles.screenOneText}>Screen One</Text>
      <TextInput
      style={styles.txt}
      placeholder = 'balue'
      onChange={e => setVal(e.target.value)}
      />
      <Button title="Go to ScreenTwo" onPress={() => navigation.navigate('ScreenTwo', {value: val}) }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screenOne: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenOneText: {
    fontSize: 32,
  },
  txt:{
margin:20,
fontSize: 25,
  }
});