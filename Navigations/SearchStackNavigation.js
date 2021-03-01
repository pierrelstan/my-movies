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

function SearchStackNavigation({}) {
  const [loaded] = useFonts({
    Monoton: require('../assets/fonts/Monoton-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Search'
        component={SearchMoviesScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
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
          headerTintColor: '#fff',
          headerTransparent: true,
          headerLeft: (props) => {
            return (
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  borderRadius: 50,
                  marginLeft: 5,
                }}
              >
                <HeaderBackButton
                  labelStyle={{
                    backgroundColor: '#fff',
                  }}
                  {...props}
                />
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
export default SearchStackNavigation;
