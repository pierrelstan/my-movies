import React from 'react';
import { View } from 'react-native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import MovieScreen from '../screens/MovieScreen';
import SearchMoviesScreen from '../screens/SearchMoviesScreen';

const Stack = createStackNavigator();

function SearchStackNavigation({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Search'
        component={SearchMoviesScreen}
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
export default SearchStackNavigation;
