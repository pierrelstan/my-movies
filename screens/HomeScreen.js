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
import Header from '../components/Header';
import ListItems from '../components/ListItems';
import SubHeader from '../components/SubHeader';
import { getMovies } from '../redux/actions/moviesAction';
import { getTrendingMovies } from '../redux/actions/trendingMoviesAction';
import { getUpcomingMovies } from '../redux/actions/upcomingMoviesAction';
import Item from '../components/Item';
import CarouseHero from '../components/Carousel';

const window = Dimensions.get('window');
let w;
if (window.width >= 320) {
  w = window.height / 2;
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
    let mounted = true;
    if (mounted) {
      Promise.all([
        dispatch(getMovies()),
        dispatch(getTrendingMovies()),
        dispatch(getUpcomingMovies()),
      ]);
    }
    return () => {
      mounted = false;
    };
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
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: 'lightgrey',
            paddingBottom: 180,
            paddingTop: 10,
          }}
        >
          <CarouseHero />
          <View>
            <Title>Trending Now</Title>
            <ListItems movies={trendingMovies} />
            <Title>Most Popular</Title>
            <ListItems movies={movies} />
            <Title>Upcoming Movies</Title>
            <ListItems movies={upcomingMovies} />
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
