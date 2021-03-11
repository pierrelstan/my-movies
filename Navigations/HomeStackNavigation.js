import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  createStackNavigator,
  HeaderBackButton,
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
            headerTransparent: true,
            tabBarVisible: false,
            animationEnabled: false,
            headerTintColor: '#fff',
            headerLeft: (props) => {
              return (
                <View
                  style={{
                    backgroundColor: 'rgba(3,3,0,1)',
                    borderRadius: 50,
                    margin: 3,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <HeaderBackButton {...props} />
                </View>
              );
            },
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
