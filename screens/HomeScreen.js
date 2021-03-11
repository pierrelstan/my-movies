import React, { useEffect } from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import styled from 'styled-components';
import ItemMemo from '../components/Item';
import CarouseHero from '../components/Carousel';
import TrendingMovies from '../components/TrendingMovies';
import MostPopularMovies from '../components/MostPopularMovies';
import UpcomingMovies from '../components/UpcomingMovies';

const window = Dimensions.get('window');
let w;
if (window.width >= 320) {
  w = window.height / 2;
}

export default function HomeScreen({ navigation }) {
  const height = useHeaderHeight();

  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT,
      );
    }
    navigation.addListener('focus', () => changeScreenOrientation());
  }, []);

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

const Title = styled.Text`
  font-size: 18px;
  margin: 4px;
  font-weight: bold;
  color: #fff;
`;
const MainTitle = styled.Text`
  font-size: 42px;
  color: #b6b133;
  font-family: 'Monoton';
  text-align: center;
  margin-bottom: 5px;
`;
