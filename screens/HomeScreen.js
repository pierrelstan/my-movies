import React, { useEffect } from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Constants from 'expo-constants';
import Header from '../components/Header';
import ListItems from '../components/ListItems';
import SubHeader from '../components/SubHeader';
import { getMovies } from '../redux/actions/moviesAction';
import { getTrendingMovies } from '../redux/actions/trendingMoviesAction';
import { getUpcomingMovies } from '../redux/actions/upcomingMoviesAction';
import { OpenItem, CloseItem } from '../redux/actions/moviesAction';
import Item from '../components/Item';
import Hero from '../components/Hero';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
let w;
if (screen.width >= 320) {
  w = screen.height / 10;
}

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { movies, trendingMovies, upcomingMovies } = useSelector((state) => ({
    movies: state.movies.movies,
    trendingMovies: state.trendingMovies.trendingMovies,
    upcomingMovies: state.upcomingMovies.upcomingMovies,
    action: state.action,
  }));
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getTrendingMovies());
    dispatch(getUpcomingMovies());
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#E3EDF7',
      }}
    >
      <Item />
      <Header />
      <SubHeader />
      <ScrollView style={{ marginBottom: w }}>
        <Hero />
        <View>
          <Title>Trending Now</Title>
          <ListItems movies={trendingMovies} />
          <Title>Most Popular</Title>
          <ListItems movies={movies} />
          <Title>Upcoming Movies</Title>
          <ListItems movies={upcomingMovies} />
        </View>
      </ScrollView>
      <StatusBar style='dark' statusBarStyle='auto' />
    </View>
  );
}

const Title = styled.Text`
  font-size: 18px;
  margin: 4px;
  font-weight: bold;
`;
