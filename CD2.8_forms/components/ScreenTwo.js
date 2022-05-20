import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function ScreenTwo({ route, navigation }) {
  const { value } = route.params;
  return (
    <View style={styles.screenTwo}>
      <Text style={styles.screenTwoText}>Screen Two</Text>
      <Text style={styles.screenTwoText}>VALUE: {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenTwo: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenTwoText: {
    fontSize: 32,
  },
});