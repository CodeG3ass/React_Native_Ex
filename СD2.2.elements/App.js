import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, backgroundColor: 'white' }}>
      <Text style={styles.paragraph}>5 книжных новинок октября
      </Text>
      </View>
      <View style={{ flex: 3, backgroundColor: 'skyblue' }}>
      <Text style={styles.text2}>«Кадиш.com» Натан Ингландер. Издательство «Книжники»
      </Text></View>
      <View style={{ flex: 10, backgroundColor: 'steelblue' }}>
      <Text style={styles.text3}>Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.
      </Text> 
      <Button style={styles.butt}
        title="Читать далее"
         color="darkblue"
        onPress={() => Alert.alert('Читать далее')}
      /></View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',

  },
  text3: {
    margin: 35,
    marginTop:45,
    color:"white",
    fontFamily: "Times New Roman",
    fontSize: 22,
    
    textAlign: 'center',
  }, 
  text2: {
    margin: 35,
    marginTop:45,
    fontFamily: "Times New Roman",
    fontSize: 24,
    textAlign: 'center',
  }, 
  paragraph: {
    margin: 35,
    marginTop:45,
    fontFamily: "Times New Roman",
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});