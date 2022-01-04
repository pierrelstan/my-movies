import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import HomeStackNavigation from './Navigations/HomeStackNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <HomeStackNavigation />
    </Provider>
  );
}
