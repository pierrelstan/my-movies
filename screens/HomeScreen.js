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
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import ListItems from '../components/ListItems';
import SubHeader from '../components/SubHeader';
import { getMovies } from '../redux/actions/moviesAction';
import { getTrendingMovies } from '../redux/actions/trendingMoviesAction';
import { getUpcomingMovies } from '../redux/actions/upcomingMoviesAction';
import { OpenItem, CloseItem } from '../redux/actions/moviesAction';
import Item from '../components/Item';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
let w;
if (window.width >= 320) {
  w = window.height / 4;
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
    <View>
      <Item />
      <Header />
      <SubHeader />
      {/* <BackgroundImage /> */}
      <SafeAreaView>
        <ScrollView style={{ marginBottom: w }}>
          <View>
            <Title>trending now</Title>
            <ListItems movies={trendingMovies} />
            <Title>most popular</Title>
            <ListItems movies={movies} />
            <Title>upcoming movies</Title>
            <ListItems movies={upcomingMovies} />
          </View>
        </ScrollView>
      </SafeAreaView>

      <StatusBar style='dark' statusBarStyle='auto' />
    </View>
  );
}

const Title = styled.Text`
  font-size: 30px;
  margin: 4px;
  text-transform: uppercase;
`;
