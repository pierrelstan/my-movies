import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import ScreenNavigation from './Navigations/BottomNavigation';
import MyStack from './Navigations/ScreenNavigation';
import store from './redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
}
