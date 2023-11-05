
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen4 from './screen/Screen4';
import Screen3 from './screen/Screen3';
import Screen2 from './screen/Screen2';
import Screen_API_01 from './screen/Screen_API_01';
const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Screen_API_01" component={Screen_API_01} options={{headerShown:false}}/>
        <stack.Screen name="Screen2" component={Screen2} options={{headerShown:false}}/>
        <stack.Screen name="Screen3" component={Screen3} options={{headerShown:false}}/>
        <stack.Screen name="Screen4" component={Screen4} options={{headerShown:false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

