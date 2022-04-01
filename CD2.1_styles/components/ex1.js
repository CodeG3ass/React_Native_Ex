import React from 'react';
import { Text, View,Button, StyleSheet, Image } from 'react-native';

const LotsOfStyles = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.news}>Новости</Text>
        <Image style={styles.logo} source={require('../assets/pic1.png')} />
        <Text style={styles.bigBlue}>Превращаем стресс в своего помощника</Text>
        <Text style={[styles.mainText]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies pharetra diam eget maximus. Ut et magna aliquam, convallis odio in, egestas mi. Morbi porta sapien augue, pretium ornare dui gravida ac. In bibendum vel quam sed ornare. Quisque in turpis ipsum. Duis sed efficitur est. Quisque varius lorem sit amet augue convallis, eu ullamcorper risus vulputate.</Text>
      <Button color="black" title="Читать далее" onPress={() => Alert.alert('Simple Button pressed')}      />
      </View>
    );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  bigBlue: {
    color: 'black',
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
  },
  mainText: {
    color: 'black',
    fontSize: 15,
    margin: 20,
  },
  news: {
    color: 'blue',
  },
  logo: {
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 40
  }
});
export default LotsOfStyles;
