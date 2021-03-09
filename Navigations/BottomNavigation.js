import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import ProfileScreen from '../screens/ProfileScreen';
import SearchStackNavigation from './SearchStackNavigation';
import HomeScreen from '../screens/HomeScreen';
import AllMovies from '../screens/AllMovies';
import ProfileStackScreen from './ProfileStackScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: '#fff',
        activeBackgroundColor: '#444',
        inactiveTintColor: '#B6B133',
        inactiveBackgroundColor: '#444',
        showLabel: false,
        tabStyle: {
          backgroundColor: '#383958',
          marginTop: -1,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          animationEnabled: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name='home-outline' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='AllMovies'
        component={AllMovies}
        options={{
          animationEnabled: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name='film-outline' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchStackNavigation}
        options={{
          headerShown: false,
          animationEnabled: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name='search-outline' color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name='Profile'
        component={ProfileStackScreen}
        options={{
          // tabBarLabel: 'Profile',
          animationEnabled: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name='person-outline' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
