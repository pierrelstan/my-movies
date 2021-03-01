import React, { useEffect } from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import styled from 'styled-components';
import ItemMemo from '../components/Item';
import CarouseHero from '../components/Carousel';
import TrendingMovies from '../components/TrendingMovies';
import MostPopularMovies from '../components/MostPopularMovies';
import UpcomingMovies from '../components/UpcomingMovies';
import Header from '../components/Header';

const window = Dimensions.get('window');
let w;
if (window.width >= 320) {
  w = window.height / 2;
}

export default function HomeScreen() {
  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT,
      );
    }
    changeScreenOrientation();
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#E3EDF7',
      }}
    >
      <Header />
      <ItemMemo />

      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: 'lightgrey',
            paddingBottom: 80,
            paddingTop: 10,
          }}
          // onScroll={() => {}}
        >
          <CarouseHero />
          <View>
            <Title>Trending Now</Title>
            <TrendingMovies />
            <Title>Most Popular</Title>
            <MostPopularMovies />
            <Title>Upcoming Movies</Title>
            <UpcomingMovies />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style='dark' statusBarStyle='auto' />
    </View>
  );
}

const Title = styled.Text`
  font-size: 18px;
  margin: 4px;
  font-weight: bold;
`;
