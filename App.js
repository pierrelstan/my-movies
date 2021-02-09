import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import BottomNavigation from './Navigations/BottomNavigation';

export default function App() {
  return <BottomNavigation />;
}
