import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login'
import Register from './Registration'

const AppStack = createStackNavigator();

const Navigate = (props) => {

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Регистрация" component={Register}/>
      <AppStack.Screen name="Авторизация" component={Login}/>
    </AppStack.Navigator>
  );
};

export default Navigate;