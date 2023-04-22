import React from 'react';
import { View } from 'react-native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import MovieScreen from '../screens/MovieScreen';
import SearchMoviesScreen from '../screens/SearchMoviesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyList from '../screens/MyListScreen';

const Stack = createStackNavigator();

export default function ProfileStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: false,
          animationEnabled: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='movie-search'
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Stack.Screen
        name='MyList'
        component={MyList}
        options={{
          headerStyle: {
            backgroundColor: '#383958',
          },
          animationEnabled: false,
          headerTintColor: '#ffff',
        }}
      />
      <Stack.Screen
        name='MovieScreen'
        component={MovieScreen}
        options={{
          headerTitle: false,
          headerStyle: {
            backgroundColor: '#383958',
          },
          animationEnabled: false,
          headerTintColor: '#ffff',
        }}
      />
    </Stack.Navigator>
  );
}
