import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import PreviewVideo from '../screens/PreviewVideoScreen';
import MovieScreen from '../screens/MovieScreen';
import BottomNavigation from './BottomNavigation';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const Stack = createStackNavigator();

function HomeStackNavigation() {
  const [loaded] = useFonts({
    Monoton: require('../assets/fonts/Monoton-Regular.ttf'),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false,
            animationEnabled: false,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 40,
              color: '#fff',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{
            headerShown: false,
            animationEnabled: false,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 40,
              color: '#fff',
              textAlign: 'center',
            },
          }}
        />

        <Stack.Screen
          name='Home'
          component={BottomNavigation}
          options={{
            headerShown: false,
            animationEnabled: false,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleStyle: {
              fontSize: 40,
              color: '#fff',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name='Trailer'
          options={{
            headerTitle: false,
            tabBarVisible: true,
            animationEnabled: false,
            headerTintColor: '#333',
          }}
          component={PreviewVideo}
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
    </NavigationContainer>
  );
}
export default HomeStackNavigation;
