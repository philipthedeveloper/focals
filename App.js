import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Reload from './Reload';

const Stack = createNativeStackNavigator();

const App = () => {
  console.log('Calling App');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Reload" component={Reload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
