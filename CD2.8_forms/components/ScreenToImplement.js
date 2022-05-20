import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';


const AppStack = createStackNavigator();

const Navigate = (props) => {

  return (
    <AppStack.Navigator>
        <AppStack.Screen name="ScreenOne" component={ScreenOne} />
        <AppStack.Screen name="ScreenTwo" component={ScreenTwo} />
    </AppStack.Navigator>
  );
};

export default Navigate;