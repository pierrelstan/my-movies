import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import BottomNavigation from './Navigations/BottomNavigation';
import store from './redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <BottomNavigation />
    </Provider>
  );
}
