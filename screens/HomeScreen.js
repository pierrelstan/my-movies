import React, { useEffect } from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import styled from 'styled-components';
import ItemMemo from '../components/Item';
import CarouseHero from '../components/Carousel';
import TrendingMovies from '../components/TrendingMovies';
import MostPopularMovies from '../components/MostPopularMovies';
import UpcomingMovies from '../components/UpcomingMovies';

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('window');
let w;
if (ScreenWidth >= 320) {
  w = ScreenHeight / 2;
}

export default function HomeScreen({ navigation }) {
  const height = useHeaderHeight();
  return (
    <View
      style={{
        backgroundColor: '#24243C',
      }}
    >
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: '#24243C',
            paddingTop: height,
          }}
        >
          <MainTitle>lo</MainTitle>
          <CarouseHero />
          <View>
            <TrendingMovies />
            <MostPopularMovies />
            <UpcomingMovies />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor='#24243C' statusBarStyle='auto' />
      <ItemMemo />
    </View>
  );
}

const MainTitle = styled.Text`
  font-size: ${Math.round(ScreenWidth) >= 737 ? `62px` : `42px`};
  color: #b6b133;
  font-family: 'Monoton';
  text-align: center;
  margin-bottom: 5px;
`;
