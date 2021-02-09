import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoviesScreen from '../screens/moviesScreen';
import HomeScreen from '../screens/HomeScreen';
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Movies' component={MoviesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
