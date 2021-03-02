import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import PreviewVideo from '../screens/PreviewVideoScreen';
import MovieScreen from '../screens/MovieScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();
const navigationRef = React.createRef();
function navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function HomeStackNavigation() {
  const [loaded] = useFonts({
    Monoton: require('../assets/fonts/Monoton-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer
      tabBar={(props) => <MyTabBar {...props} />}
      ref={navigationRef}
    >
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={BottomNavigation}
          options={{
            headerShown: false,
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
                  <HeaderBackButton
                    {...props}
                    onPress={() => {
                      // navigate('Home');
                      navigate('Home', { screen: 'Home' });
                      ScreenOrientation.lockAsync(
                        ScreenOrientation.OrientationLock.PORTRAIT,
                      );
                    }}
                  />
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

            headerTintColor: '#fff',
            headerTransparent: true,
            headerLeft: (props) => {
              return (
                <View
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: 50,
                    margin: 20,
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
    </NavigationContainer>
  );
}
export default HomeStackNavigation;
