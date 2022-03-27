/* eslint-disable prettier/prettier */
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/index';
import Start from '../screens/start/index';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen
        options={{headerShown: false}}
        name="Start"
        component={Start}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
